import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import menuHam from "../../../assets/definicoes.png";
import iconBeach from "../../../assets/emFrente.png";
import iconCupomBeach from "../../../assets/cupomAirbnb.png";
import iconChale from "../../../assets/ChaleAirbnb.png";
import iconWindow from "../../../assets/janelaAirbnb.png";
import iconButton from "../../../assets/botaoIcon.png";
import frentePraiaFoto from "../../../assets/frentePraiaFoto.png";
import heart from "../../../assets/heart.png";
import userIcon from "../../../assets/user.png";
import search from "../../../assets/search.png";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import FooterItem from "../../components/footer/ComponentFooter";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export const Home = () => {
  const [placeholder, setPlaceholder] = useState("Para onde?\nQualqu... • Qualque... • Hóspe...");
  const [selectedTab, setSelectedTab] = useState("Explorar");
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Tipando o hook de navegação

  const navigateToAnotherPage = () => {
    navigation.navigate("Page"); // Navegar para a outra página
  };

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder("Para onde?\nQualq... • Qualqu... • Hóspe...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPagContainer}>
        <View style={styles.topPag}>
          <View style={styles.searchBar}>
            <View>
              <Image source={search} style={styles.imageSearchIcon} />
            </View>
            <View style={styles.searchText}>
              <TextInput
                style={styles.textTitle}
                placeholder={placeholder}
                multiline
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </View>
          </View>
          <View style={styles.searchHam}>
            <Image source={menuHam} style={styles.menuHam} />
          </View>
        </View>
        <View style={styles.iconsTopPag}>
          <View style={styles.textAndIconsTopPagOne}>
            <Image source={iconBeach} style={styles.iconTopPagBeach} />
            <Text style={styles.textTopPagOne}>Em frente à praia</Text>
          </View>
          <View style={styles.textAndIconsTopPag}>
            <Image source={iconCupomBeach} style={styles.iconTopPagCupom} />
            <Text style={styles.textTopPag}>Icônicos</Text>
          </View>
          <View style={styles.textAndIconsTopPag}>
            <Image source={iconChale} style={styles.iconTopPagCupom} />
            <Text style={styles.textTopPag}>Chalés</Text>
          </View>
          <View style={styles.textAndIconsTopPag}>
            <Image source={iconWindow} style={styles.iconTopPagCupom} />
            <Text style={styles.textTopPag}>Vistas incríveis</Text>
          </View>
        </View>
      </View>

      <View style={styles.mainPage}>
        <View style={styles.mainPagBox}>
          <View style={styles.mainPagBoxLeft}>
            <Text style={styles.textMainPage}>Mostrar preço total</Text>
            <Text style={styles.textMainPageTwo}>
              Inclui todas as taxas, sem impostos
            </Text>
          </View>
          <View>
            <Image source={iconButton} style={styles.buttonMainPage} />
          </View>
        </View>
        <TouchableOpacity onPress={navigateToAnotherPage}>
          <ImageBackground source={frentePraiaFoto} style={styles.mainPageHomes}>
            <View style={styles.mainPageHomesHeader}>
              <Text style={styles.textMainPagePreferHosp}>
                Preferido dos hóspedes
              </Text>
              <Image source={heart} style={styles.imageMainPagePreferHosp} />
            </View>
            <View style={styles.mainPageReticencias}>
              <Text style={styles.mainPageReticenciasText}>• • • • •</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <FooterItem
          icon={search}
          text="Explorar"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <FooterItem
          icon={heart}
          text="Favoritos"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <FooterItem
          icon={userIcon}
          text="Entrar"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </View>
    </View>
  );
};
