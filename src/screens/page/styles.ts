import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  carouselContainer: {
    position: 'relative',
    width: 375,
    height: 100,
    alignItems: 'center',
  },
  carouselImage: {
    width: 375,
    height: 250,
    resizeMode: 'cover',
  },
  topPagMain: {
    position: 'absolute',
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between",
    padding: 16
  },
  topPagLeft: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    borderRadius: 50,
  },
  topPagRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    gap: 15,
  },
  topPagRightBackgroundImage: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10
  },
  topPagIcons: {
    width: 15,
    height: 15,
  },
  topPagIconsHeart: {
    width: 15,
    height: 15,
  },
  topPagIconsHeartRed: {
    width: 15,
    height: 15,
    tintColor: 'red'
  },
  bottomPag: {
    position: 'absolute',
    width: '100%',
    top: 170,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 16
  },
  topPagBottom: {
    backgroundColor: '#3B3B3B',
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 7,
    borderRadius: 5
  },
  topPagBottomText: {
    color: 'white',
  },
  mainPage: {
    paddingHorizontal: 16
  },
  textMainPage: {
    paddingTop: 24,
    paddingBottom: 16,
    fontSize: 30,
    fontWeight: '400'
  },
  mainPageTwo: {
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  textTwoMainPage: {
    fontSize: 18, 
    fontWeight: '600'
  },
  textThreeMainPage: {
    marginTop: 3,
    fontSize: 15
  },
  avaliacao: {
    // backgroundColor: 'black',
    width: '100%',
    height: 'auto',
    paddingHorizontal: 16,
  },
  avaliacaoBox: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 13,
        justifyContent: 'space-between',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: "row",
        shadowColor: '#000',          // Cor da sombra
        shadowOpacity: 0.4,           // Opacidade da sombra
        shadowRadius: 3.5,             // Raio da sombra (para iOS)
        elevation: 5,                  // Sombras para Android
        // gap: 6
  },
  firstAvaliacaoBox: {
    alignItems: 'center'
  },
  firstAvaliacaoBoxText: {
    fontSize: 18,
    fontWeight: '600'
  },
  iconStarsBox: {
    flexDirection: 'row'
  },
  iconStars: {
    width: 10,
    height: 10
  },
  line: {
    borderLeftWidth: 1,
    borderColor: 'black',
    height: '100%',
  },
  midAvaliacaoBox: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  iconPlantLeft: {
    width: 35,
    height: 35,
    transform: [{ scaleX: -1 }],
  },
  textMidAvaliacaoBox: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    width: 'auto'
  },
  iconPlantRight: {
    width: 35,
    height: 35,
  },
  lastAvaliacaoBox: {
    alignItems: 'center'
  },
  lastAvaliacaoBoxTextOne: {
    fontSize: 18,
    fontWeight: '600'
  },
  lastAvaliacaoBoxTextTwo: {
    textDecorationLine: 'underline',
    fontWeight: '600'
  },
  footer: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    // borderTopColor: 'black',
    // borderTopWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    alignItems: 'center',
    paddingHorizontal: 24,
    // justifyContent: 'center',
    justifyContent: 'space-around',
  },
  footerLeft: {
    // borderWidth: 1,
    width: '50%'
  },
  footerLeftText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLeftTextOnePrice: {
    color: 'gray',
    fontSize: 19,
    textDecorationLine: 'underline line-through'
  },
  footerLeftTextTwoPrice: {
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  footerLeftTextTwoPriceText: {
    fontSize: 19,
    fontWeight: '600'
  },
  cancelamento: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 9,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 50,
    paddingLeft: 8,
    marginTop: 6,
    gap: 10
  },
  checkFooter: {
    width: 10,
    height: 10
  },
  cancelamentoText: {
    fontSize: 13,
    fontWeight: '400'
  },
  footerRight: {
    backgroundColor: '#ff385c',
    width: '40%',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  footerRightText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
});
