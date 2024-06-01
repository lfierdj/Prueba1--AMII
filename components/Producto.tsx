import React from 'react'; 
import { View, Text, Image, Button, StyleSheet } from 'react-native'; 
 
interface ProductoProps { 
  producto: { 
    name: string; 
    price: string; 
    image: string; 
  }; 
  onPrevious: () => void; 
  onNext: () => void; 
} 
 
const Producto: React.FC<ProductoProps> = ({ producto, onPrevious, onNext }) => { 
  return ( 
    <View> 
      <Text style={styles.header}>PRODUCTOS EN VENTA</Text> 
      <View style={styles.navigation}> 
        <Button title="<" onPress={onPrevious} /> 
        <Image source={{ uri: producto.image }} style={styles.productImage} /> 
        <Button title=">" onPress={onNext} /> 
      </View> 
      <Text style={styles.price}>Precio: ${producto.price}</Text> 
      <Text style={styles.name}>Nombre: {producto.name}</Text> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  header: { 
    fontSize: 22, 
    marginBottom: 10, 
    color: '#333',
    fontFamily: 'OpenSans-SemiBold', 
    fontStyle: 'italic' 
},
  navigation: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10, 
  }, 
  productImage: { 
    width: 200, 
    height: 200, 
    marginHorizontal: 10, 
  }, 
  price: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 5, 
  }, 
  name: { 
    fontSize: 16, 
    color: '#666', 
  }, 
}); 
 
export default Producto;
