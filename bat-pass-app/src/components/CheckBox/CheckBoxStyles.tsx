import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 22, 
        width:'80%',
        justifyContent:'flex-start'
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#E5Df3C',
        
    },
    switch: {
        transform: [{ scale: 0.7 }] 
    }
});
export default styles;