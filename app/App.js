// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../app/screens/HomeScreen'; // Ruta relativa desde el archivo actual
import DetailsScreen from '../app/screens/DetailsScreen';
import SettingsScreen from '../app/screens/SettingsScreen';
import ProfileScreen from '../app/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    
  );
};

export default App;
