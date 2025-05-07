import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyProposals() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>📄 Hello from My Proposals!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
