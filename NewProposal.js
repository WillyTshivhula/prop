import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewProposal() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>✍️ Hello from New Proposal!</Text>
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
