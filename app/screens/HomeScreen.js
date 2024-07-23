// HomeScreen.js
import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import globalStyles from '../styles/globalStyles';
import NavigationButton from '../components/NavigationButton';



export const HomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      {/* Primer fondo (70% del ancho) */}
      <ImageBackground source={require('../images/background1.jpg')} style={[globalStyles.backgroundImage, globalStyles.firstBackground]}>
        {/* Contenido para el primer fondo si es necesario */}
      </ImageBackground>

      {/* Segundo fondo (30% del ancho) */}
      <ImageBackground source={require('../images/background2.jpg')} style={[globalStyles.backgroundImage, globalStyles.secondBackground]}>
        {/* Contenido para el segundo fondo si es necesario */}
      </ImageBackground>

      {/* Imagen en la mitad */}
      <View style={globalStyles.middleContainer}>
        <Image source={require('../images/encabezado.png')} style={globalStyles.middleImage} />
      </View>

      {/* Contenedor del texto en la parte superior izquierda */}
      <View style={globalStyles.topLeftTextContainer}>
        <Text style={globalStyles.topLeftText}>Junior Developer</Text>
      </View>

      {/* Contenedor de los botones de navegación */}
      <View style={globalStyles.navigationContainer}>
        {/* Botón de navegación a Detalles */}
        <NavigationButton
          text="Details"
          onPress={() => navigation.navigate('Details')}
        />

        {/* Botón de navegación a Ajustes */}
        <NavigationButton
          text="Proyectos"
          onPress={() => navigation.navigate('Settings')}
        />

        {/* Botón de navegación a Perfil */}
        <NavigationButton
          text="Contacto"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
