import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UpdateStatusComponent = ({ status }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        {status === 'checking' ? 'Checking for updates...' :
         status === 'available' ? 'Update available!' :
         'Up to date!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    alignItems: 'left',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdateStatusComponent;