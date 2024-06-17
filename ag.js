import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ag from './assets/ag.webp';
import { Image } from 'react-native';

const AGComponent = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={ag} style={{width: 135, height: 135, marginTop: 20,}} />

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.groupText}>Angry Birds</Text>
        <Text style={styles.freeText}>7.99$</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'left',
    backgroundColor: 'linear-gradient(to bottom, #0D47A1, #2196F3)',
    marginTop: 5,
    marginBottom: 5,
    padding: 0,
    elevation: 4, // Add shadow effect
  },
  icon: {
    backgroundColor: '#1EBBEE',
    padding: 50,
    marginRight: 185,
    aspectRatio: 1,
  },
  iconText: {
    color: '#0D47A1',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
  },
  groupText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  freeText: {
    color: 'white',
    fontSize: 14,
  },
});

export default AGComponent;