// NavigationButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavigationButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.navigationButton} onPress={onPress}>
      <Text style={styles.navigationButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navigationButton: {
    backgroundColor: '#61DAFB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default NavigationButton;
