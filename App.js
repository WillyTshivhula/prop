import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import About from './screens/About';
import NewProposal from './screens/NewProposal';
import MyProposals from './screens/MyProposals';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="NewProposal" component={NewProposal} />
        <Stack.Screen name="MyProposals" component={MyProposals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
