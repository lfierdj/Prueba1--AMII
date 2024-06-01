import React from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native'; 
 
interface MenuProps { 
  platillo: { 
    strCategory: string; 
    strCategoryThumb: string; 
    strCategoryDescription: string; 
  }; 
} 
 
const Descripcion: React.FC<MenuProps> = ({ platillo }) => { 
  return ( 
    <View style={styles.menuContainer}> 
      <Image source={{ uri: platillo.strCategoryThumb }} style={styles.menuImage} /> 
      <Text style={styles.menuTitle}>{platillo.strCategory}</Text> 
      <Text style={styles.menuDescription}>{platillo.strCategoryDescription}</Text> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({
    menuContainer: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#F6CED8', // color de fondo del contenedor
      borderRadius: 10, // radio de curvatura del contenedor
      shadowColor: '#000', // color de la sombra
      shadowOffset: { width: 0, height: 2 }, // offset de la sombra
      shadowOpacity: 0.25, // opacidad de la sombra
      elevation: 5, // elevación del contenedor
    },
    menuImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2, // ancho del borde
      borderColor: '#ddd', // color del borde
    },
    menuTitle: {
      fontSize: 18,
      fontFamily: 'OpenSans-SemiBold', // tipo de letra
      color: '#333', // color del texto
      marginVertical: 10, // espacio entre el título y la imagen/descripción
    },
    menuDescription: {
      fontSize: 14,
      fontFamily: 'OpenSans-Regular', // tipo de letra
      color: '#666', // color del texto
      textAlign: 'center', // alineación del texto
      marginTop: 5, // espacio entre el título y la descripción
    },
  });
 
export default Descripcion;