import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'; 
import Producto from '../components/Producto'; 

interface ProductoData { 
  name: string; 
  price: string; 
  image: string; 
} 

const ProductoScreen: React.FC = () => { 
  const [productos, setProductos] = useState<ProductoData[]>([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchProductos = async () => { 
      try { 
        const response = await fetch('https://api.sampleapis.com/beers/ale/'); 
        const data = await response.json(); 
        const productosConPrecio = data.map((producto: any) => ({ 
          ...producto, 
          price: (Math.random() * 10 + 1).toFixed(2), 
          image: producto.image || 'https://via.placeholder.com/100', 
        })); 
        setProductos(productosConPrecio); 
        setLoading(false);
      } catch (error) { 
        console.error(error); 
        setLoading(false);
      } 
    }; 
    fetchProductos(); 
  }, []); 

  const handlePrevious = () => { 
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : productos.length - 1)); 
  }; 

  const handleNext = () => { 
    setCurrentIndex((prevIndex) => (prevIndex < productos.length - 1 ? prevIndex + 1 : 0)); 
  }; 

  if (loading) { 
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  } 

  if (productos.length === 0) { 
    return <Text style={styles.loadingText}>No se encontraron productos.</Text>; 
  } 

  const currentProducto = productos[currentIndex]; 

  return ( 
    <View style={styles.screenContainer}> 
      <Producto producto={currentProducto} onPrevious={handlePrevious} onNext={handleNext} /> 
    </View> 
  ); 
}; 

const styles = StyleSheet.create({ 
    screenContainer: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#F6CED8', 
    }, 
    loadingText: { 
      fontSize: 20, 
    }, 
    loadingIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
export default ProductoScreen;
