// SettingsScreen.js
import React from 'react';
import { View, ImageBackground } from 'react-native';
import globalStyles from '../styles/globalStyles';

export const SettingsScreen = () => {
  return (
    <View style={globalStyles.container}>
      {/* Contenido similar a HomeScreen */}
      <ImageBackground source={require('../images/background1.jpg')} style={[globalStyles.backgroundImage, globalStyles.firstBackground]}>
        {/* Contenido para el primer fondo si es necesario */}
      </ImageBackground>

      <ImageBackground source={require('../images/background2.jpg')} style={[globalStyles.backgroundImage, globalStyles.secondBackground]}>
        {/* Contenido para el segundo fondo si es necesario */}
      </ImageBackground>

      {/* Agrega aquí tu contenido específico para la pantalla de ajustes */}
    </View>
  );
};

export default SettingsScreen;
