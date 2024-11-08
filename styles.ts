import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#121015',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textSkill: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row",
    },
    image: {
        tintColor: "#f00",
        width: 50,
        height: 50
    },
});