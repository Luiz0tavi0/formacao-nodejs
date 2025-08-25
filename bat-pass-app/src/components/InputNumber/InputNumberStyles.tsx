import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: 150,
    },
    text: {
        fontSize: 36,
        paddingHorizontal: 10,
        color: "#e5bf3c",
        fontWeight: 'bold'
    },
    inputer: {
        width: 60,
        height: 50,
        fontSize: 18,
        color: "#e5bf3c",
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
    },
    switch: {
        transform: [{ scale: 0.7 }]
    },

});
export default styles;