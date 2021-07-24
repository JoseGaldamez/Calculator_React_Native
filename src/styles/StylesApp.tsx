import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black'
    },
    container: {
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    result: {
        color: 'white',
        fontSize: 60,
        fontWeight: '300',
        textAlign: 'right',
        marginBottom: 15
    },
    lastResult: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'right'
    },
    row: {
        padding: 5,
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: 'grey',
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    textButton: {
        fontSize: 25,
        fontWeight: '300',
        color: 'white'
    }
});