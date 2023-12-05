import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaSplash from './assets/TelaSplash';
import Quiz from './assets/Quiz';
import Resultado from './assets/Resultado';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={TelaSplash} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
