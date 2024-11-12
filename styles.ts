import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingHorizontal: 0
    },
    topPagContainer: {
        // paddingHorizontal: 17,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8.5,
        elevation: 5,
        shadowOffset: { width: 0, height: 6 }, // Sombra na parte inferior
    },
    topPag: {
        paddingHorizontal: 17,
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchBar: {
        backgroundColor: 'white',
        paddingTop: 9,
        paddingBottom: 9,
        paddingHorizontal: 13,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row",
        shadowColor: '#000',          // Cor da sombra
        shadowOpacity: 0.2,           // Opacidade da sombra
        shadowRadius: 3.5,             // Raio da sombra (para iOS)
        elevation: 5,                  // Sombras para Android
    },
    imageSearchIcon: {
        width: 19,
        height: 19,
        marginRight: 20
    },
    searchText: {
        flexDirection: 'column',
    },
    textTitle: {
        fontSize: 15,
        fontWeight: '600',
    },
    textPar: {
        fontSize: 12,
        color: 'gray'
    },
    searchHam: {
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 50,
        borderWidth: 1, // Valor intermediário para visibilidade
        borderColor: '#979899', // Cor clara para borda mais suave
        alignItems: 'center',
        // shadowColor: '#000',          // Cor da sombra
        // shadowOpacity: 10,           // Opacidade da sombra
        // shadowRadius: 3,             // Raio da sombra (para iOS)
        // elevation: 5,                  // Sombras para Android
    },
    menuHam: {
        width: 17,
        height: 17,
    },
    iconsTopPag: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35
    },
    textAndIconsTopPagOne: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // borderColor: 'black',
        // borderWidth: 1,
        flexShrink: 1,
        height: 60,
        // borderWidth: 2
        borderBottomWidth: 2
    },
    textAndIconsTopPag: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // borderColor: 'black',
        flexShrink: 1,
        height: 60,
    },
    iconTopPagBeach: {
        width: 25,
        height: 25,
    },
    textTopPagOne: {
        fontSize: 11,
        fontWeight: '600'
    },
    textTopPag: {
        fontSize: 11,
        fontWeight: '600',
        color: 'gray'
    },
    iconTopPagCupom: {
        width: 25,
        height: 25,
        tintColor: 'gray'
    },
    mainPage: {
        alignItems: 'center'
    },
    mainPagBox: {
        marginTop: 30,
        shadowColor: '#000',          // Cor da sombra
        shadowOpacity: 0.6,           // Opacidade da sombra
        shadowRadius: 2,             // Raio da sombra (para iOS)
        elevation: 5,                  // Sombras para Android
        width: '85%',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textMainPage: {
        fontSize: 15,
        fontWeight: '600'
    },
    textMainPageTwo: {
        fontSize: 15,
        color: '#6a6a6a'
    },
    mainPagBoxLeft: {
        // borderColor: 'black',
        // borderWidth: 1,
        width: 180
    },
    buttonMainPage: {
        width: 55,
        height: 55,
    },
    mainPageHomes: {
        width: 320,
        height: 320,
        borderRadius: 10,         // Define o arredondamento da borda
        overflow: 'hidden',       // Garante que a imagem respeite o arredondamento
        marginTop: 30,
        justifyContent: 'space-between'
    },
    mainPageHomesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    textMainPagePreferHosp: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        fontWeight: '600',
        fontSize: 15
    },
    imageMainPagePreferHosp: {
        width: 25,
        height: 25,
        tintColor: 'white',
    },
    mainPageReticencias: {
        alignItems: 'center'
    },
    mainPageReticenciasText: {
        fontSize: 25,
        color: 'white'
    },
    footer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        // borderTopColor: 'black',
        // borderTopWidth: 1,
        shadowColor: '#000',          // Cor da sombra
        shadowOpacity: 0.5,           // Opacidade da sombra
        shadowRadius: 1,             // Raio da sombra (para iOS)
        elevation: 5,                  // Sombras para Android
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    footerBox: {
        // borderWidth: 1,
        alignItems: 'center'
    },
    footerSearchIcon: {
        width: 22,
        height: 22,
        tintColor: 'red'
    },
    footerTextRed: {
        color: 'red'
    },
    footerHeartIcon: {
        width: 22,
        height: 22,
        tintColor: 'gray'
    },
    footerUserIcon: {
        width: 22,
        height: 22,
        tintColor: 'gray'
    },
    footerText: {
        color: 'gray'
    }
    








    
});