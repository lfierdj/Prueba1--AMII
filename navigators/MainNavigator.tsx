import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import descripcionScreen from '../Screens/descripcionScreen';
import productosScreen from '../Screens/productosScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs () {
    return(
        
    <Tab.Navigator initialRouteName="Prueba_moviles">
    <Tab.Screen
        name="Productos"
        component={productosScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder-home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Descripcion"
        component={descripcionScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>)
}


export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}