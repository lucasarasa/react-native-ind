import React, { useState } from "react"
import { styles } from "./styles"
import { ImageBackground, View, Image, Text, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity } from "react-native"
import homeBack from "./assets/homeSegTela.png"
import arrowLeft from "../../../assets/setaEsquerda.png"
import upload from "../../../assets/upload.png"
import heart from "../../../assets/heart.png"
import stars from "../../../assets/star.png"
import plantRight from "../../../assets/plantRight.png"
import etiqueta from "./assets/formEtiqueta.png"
import check from "../../../assets/check.png"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../navigation/types"

type NavigationProp = StackNavigationProp<RootStackParamList, 'Page'>;

const images = [
    {id: '1', src: require('../../../assets/homeSegTela.png')},
    {id: '2', src: require('../../../assets/img2home.png')},
]

const { width } = Dimensions.get("window");

export const Page = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const navigation = useNavigation<NavigationProp>();
    
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const pageIndex = Math.floor(event.nativeEvent.contentOffset.x / width) + 1;
        setCurrentPage(pageIndex);
    }

    const navigateToHome = () => {
        navigation.navigate('Home');  // Navega para a página 'Home'
      }

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.carouselContainer}>
                        <Image source={item.src} style={styles.carouselImage}/>
                    </View>
                ) }       
                onScroll={handleScroll}
                scrollEventThrottle={16}     
            />
            <View style={styles.topPagMain}>
                <View style={styles.topPagLeft}>
                    <TouchableOpacity onPress={navigateToHome}>
                        <Image source={arrowLeft} style={styles.topPagIcons} />
                    </TouchableOpacity>
                </View>
                <View style={styles.topPagRight}>
                    <View style={styles.topPagRightBackgroundImage}>
                    <Image source={upload} style={styles.topPagIcons}/>
                    </View>
                    <View style={styles.topPagRightBackgroundImage}>
                    <Image source={heart} style={styles.topPagIcons}/>
                    </View>
                </View>
            </View>
            <View style={styles.bottomPag}>
                <View style={styles.topPagBottom}>
                    <Text style={styles.topPagBottomText}>
                        {currentPage}/{images.length}
                    </Text>
                </View>
            </View>
        
            <View style={styles.mainPage}>
                <Text style={styles.textMainPage}>
                    Apartamento de frente para o mar em Búzios
                </Text>
            </View>
            <View style={styles.mainPageTwo}>
                <Text style={styles.textTwoMainPage}>
                    Espaço inteiro: apartamento em Manguinhos, Brasil
                </Text>
                <Text style={styles.textThreeMainPage}>
                    2 hóspedes · 1 quarto · 1 cama · 1 banheiro 
                </Text>
            </View>

            <View style={styles.avaliacao}>
                <View style={styles.avaliacaoBox}>
                    <View style={styles.firstAvaliacaoBox}>
                        <Text style={styles.firstAvaliacaoBoxText}>4,9</Text>
                        <View style={styles.iconStarsBox}>
                        <Image source={stars} style={styles.iconStars}/>
                        <Image source={stars} style={styles.iconStars}/>
                        <Image source={stars} style={styles.iconStars}/>
                        <Image source={stars} style={styles.iconStars}/>
                        <Image source={stars} style={styles.iconStars}/>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.midAvaliacaoBox}>
                        <Image source={plantRight} style={styles.iconPlantLeft}/>
                        <Text style={styles.textMidAvaliacaoBox}>Preferido<br/>dos hóspedes</Text>
                        <Image source={plantRight} style={styles.iconPlantRight}/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.lastAvaliacaoBox}>
                        <Text style={styles.lastAvaliacaoBoxTextOne}>138</Text>
                        <Text style={styles.lastAvaliacaoBoxTextTwo}>avaliações</Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <View style={styles.footerLeftText}>
                        <Text style={styles.footerLeftTextOnePrice}>R$593 </Text>
                        <Text style={styles.footerLeftTextTwoPrice}><span style={styles.footerLeftTextTwoPriceText}>R$412</span> noite</Text>
                    </View>
                    <View style={styles.cancelamento}>
                        <Image source={check} style={styles.checkFooter}/>
                        <Text style={styles.cancelamentoText}>Cancelamento gratuito</Text>
                    </View>
                </View>
                <View style={styles.footerRight}>
                    <Text style={styles.footerRightText}>
                        Reservar
                    </Text>
                </View>
            </View>
        </View>
        
    )
}