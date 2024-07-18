import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'; // Keep Image for future use

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Light background
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 32, // Increased header title font size
    fontWeight: 'bold',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  a
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  skillIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#5670FF',
  },
  skillText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  projectItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  }, // Consider using 'center' alignment for project descriptions
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#33FFA3', // Project title color
  },
  projectDescription: {
    flex: 1, // Allow project descriptions to fill available space
    color: '#666', // Project description color
  },
  contactInfo: {
    textAlign: 'center',
  },
});

const App: React.FC = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

}
