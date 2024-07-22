import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pantalla de inicio
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Primer fondo (70% del ancho) */}
      <ImageBackground source={require('./background1.jpg')} style={[styles.backgroundImage, styles.firstBackground]}>
        {/* Contenido para el primer fondo si es necesario */}
      </ImageBackground>

      {/* Segundo fondo (30% del ancho) */}
      <ImageBackground source={require('./background2.jpg')} style={[styles.backgroundImage, styles.secondBackground]}>
        {/* Contenido para el segundo fondo si es necesario */}
      </ImageBackground>

      {/* Imagen en la mitad */}
      <View style={styles.middleContainer}>
        <Image source={require('./encabezado.png')} style={styles.middleImage} />
      </View>

      {/* Contenedor del texto en la parte superior izquierda */}
      <View style={styles.topLeftTextContainer}>
        <Text style={styles.topLeftText}>Junior Developer</Text>
      </View>

      {/* Contenedor de los botones de navegación */}
      <View style={styles.navigationContainer}>
        {/* Botón de navegación a Detalles */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.navigationButtonText}>Details</Text>
        </TouchableOpacity>

        {/* Botón de navegación a Ajustes */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.navigationButtonText}>Proyectos</Text>
        </TouchableOpacity>

        {/* Botón de navegación a Perfil */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navigationButtonText}>Contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Pantalla de detalles
const DetailsScreen = () => {
  
  const projects = [
    {
      title: 'Juego 1',
      description: 'Descripción del Proyecto 1',
      imageSource: require('./proyecto1.jpg'),
    },
    {
      title: 'Juego 2',
      description: 'Descripción del Proyecto 2',
      imageSource: require('./proyecto2.jpg'),
    },
    {
      title: 'Juego 3',
      description: 'Descripción del Proyecto 3',
      imageSource: require('./proyecto3.jpg'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Fondo */}
      <ImageBackground source={require('./background1.jpg')} style={styles.backgroundImage}>
        {/* Recorremos los proyectos */}
        {projects.map((project, index) => (
          <View key={index} style={styles.projectContainer}>
            <Image source={project.imageSource} style={styles.projectImage} />
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
          </View>
        ))}
      </ImageBackground>
    </ScrollView>
  );
  
};

// Pantalla de ajustes
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Contenido similar a HomeScreen */}
      <ImageBackground source={require('./background1.jpg')} style={[styles.backgroundImage, styles.firstBackground]}>
        {/* Contenido para el primer fondo si es necesario */}
      </ImageBackground>

      <ImageBackground source={require('./background2.jpg')} style={[styles.backgroundImage, styles.secondBackground]}>
        {/* Contenido para el segundo fondo si es necesario */}
      </ImageBackground>

      
    </View>
  );
};

// Pantalla de perfil
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Contenido similar a HomeScreen */}
      <ImageBackground source={require('./background1.jpg')} style={[styles.backgroundImage, styles.firstBackground]}>
        {/* Contenido para el primer fondo si es necesario */}
      </ImageBackground>

      <ImageBackground source={require('./background2.jpg')} style={[styles.backgroundImage, styles.secondBackground]}>
        {/* Contenido para el segundo fondo si es necesario */}
      </ImageBackground>

      
    </View>
  );
};

// Configuración del stack de navegación
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

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  firstBackground: {
    flex: 7,
  },
  secondBackground: {
    flex: 3,
  },
  middleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
    right: 0,
    width: '50%',
    height: '100%',
  },
  middleImage: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
  topLeftTextContainer: {
    position: 'absolute',
    top: 200,
    left: 250,
    maxWidth: '20%',
    alignItems: 'flex-start',
  },
  topLeftText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#57B7E3',
  },
  navigationContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'column', // Alinea los botones verticalmente
  },
  navigationButton: {
    backgroundColor: '#61DAFB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10, // Espacio entre los botones
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#57B7E3',
  },
  
  projectContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  projectImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#333333',
  },
  projectDescription: {
    textAlign: 'center',
    color: '#666666',
  }
});

export default App;
