import {View, Text, ImageBackground, StyleSheet } from 'react-native';


export default function Item({valor, imageSource}){
    return(
        <View style={styles.Item}>
        <ImageBackground style ={styles.image} source ={imageSource}>
            <Text style={styles.texto}>precio:{valor}</Text>
        </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    Item: {
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5
    },
    image: {
        width: 130,
        height: 130,
        marginTop: 6
    },
    texto: {
        marginTop: 2,
        fontSize: 8,
        color: 'black',
    }
});