// DetailsScreen.js
import React from 'react';
import { View, ImageBackground, Image, Text, ScrollView, ImageBackgroundBase, ScrollViewBase, ViewBase, ImageBase, TextBase } from  "react-native" ; 
import globalStyles from '../styles/globalStyles';

export const DetailsScreen = () => {
  const projects = [
    {
      title: 'Juego 1',
      description: 'Descripción del Proyecto 1',
      imageSource: require('../images/proyecto1.jpg'),
    },
    {
      title: 'Juego 2',
      description: 'Descripción del Proyecto 2',
      imageSource: require('../images/proyecto2.jpg'),
    },
    {
      title: 'Juego 3',
      description: 'Descripción del Proyecto 3',
      imageSource: require('../images/proyecto3.jpg'),
    },
  ];

  return (
    <ScrollViewBase contentContainerStyle={globalStyles.container}>
      {/* Fondo */}
      <ImageBackgroundBase source={require('../images/background1.jpg')} style={globalStyles.backgroundImage}>
        {/* Recorremos los proyectos */}
        {projects.map((project, index) => (
          <ViewBase key={index} style={globalStyles.projectContainer}>
            <ImageBase source={project.imageSource} style={globalStyles.projectImage} />
            <TextBase style={globalStyles.projectTitle}>{project.title}</TextBase>
            <Text style={globalStyles.projectDescription}>{project.description}</Text>
          </ViewBase>
        ))}
      </ImageBackgroundBase>
    </ScrollViewBase>
  );
};

export default DetailsScreen;
