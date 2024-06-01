import React, { useState, useEffect } from 'react'; 
import { View, Text, FlatList, StyleSheet } from 'react-native'; 
import Menu from '../components/Descripcion'; 
 
interface PlatilloData { 
  idCategory: string; 
  strCategory: string; 
  strCategoryThumb: string; 
  strCategoryDescription: string; 
} 
 
const DescripcionScreen: React.FC = () => { 
  const [platillos, setPlatillos] = useState<PlatilloData[]>([]); 
 
  useEffect(() => { 
    const fetchPlatillos = async () => { 
      try { 
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php'); 
        const data = await response.json(); 
        setPlatillos(data.categories); 
      } catch (error) { 
        console.error(error); 
      } 
    }; 
    fetchPlatillos(); 
  }, []); 
 
  const renderItem = ({ item }: { item: PlatilloData }) => <Menu platillo={item} />; 
 
  if (platillos.length === 0) { 
    return <Text style={styles.loadingText}>Cargando...</Text>; 
  } 
 
  return ( 
    <View style={styles.screenContainer}> 
      <FlatList 
        data={platillos} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.idCategory} 
      /> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular', // tipo de letra
    color: '#666', // color del texto
    textAlign: 'center', // alineación del texto
    marginBottom: 20, // espacio entre el texto y el FlatList
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 20, // espacio entre el contenido y el borde izquierdo y derecho
    paddingVertical: 10, // espacio entre el contenido y el borde superior e inferior
  },
  itemContainer: {
    backgroundColor: '#fff', // color de fondo del item
    borderRadius: 10, // radio de curvatura del item
    padding: 10, // espacio entre el contenido y el borde del item
    marginBottom: 10, // espacio entre los items
  },
  itemText: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold', // tipo de letra
    color: '#333', // color del texto
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular', // tipo de letra
    color: '#666', // color del texto
    marginTop: 5, // espacio entre el título y la descripción
  },
});
 
export default DescripcionScreen;