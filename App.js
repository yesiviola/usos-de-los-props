import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item'; 


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Catalog</Text>
      <View style={styles.itemsContainer}>
      <Item valor={1000 + " pesos"} imageSource={require('./assets/cocacola.jpg')} />
      <Item valor={2000 + " pesos"} imageSource={require('./assets/atun.png')} />
      <Item valor={3000 + " pesos"} imageSource={require('./assets/pastas.jpg')} />
      <Item valor={4000 + " pesos"} imageSource={require('./assets/papas.png')} />
      <Item valor={5000 + " pesos"} imageSource={require('./assets/arroz.jpg')} />
      <Item valor={6000 + " pesos"}imageSource={require('./assets/salsa.jpg')} />
      <Item valor={7000 + " pesos"} imageSource={require('./assets/leche.jpg')} />
      <Item valor={8000 + " pesos"} imageSource={require('./assets/aceite.jpg')} />
      <Item valor={9000 + " pesos"} imageSource={require('./assets/queso.jpg')} />
      <Item valor={10000 + " pesos"} imageSource={require('./assets/jabon-tocador.jpg')} />
      <Item valor={11000 + " pesos"} imageSource={require('./assets/avena.jpg')} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: " column",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  itemsContainer: {
    flex: 1,
    flexDirection: " row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue'
  }
});