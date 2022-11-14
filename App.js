import React from 'react';
import { View, Image, Button } from 'react-native';
import { HomeScreen } from './src/HomeScreen';
import { ImageScreen } from './src/ImageScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" 
                        component={HomeScreen}
                        options={{headerShown: false }}/>
          <Stack.Screen name="Image" 
                        component={ImageScreen}
                        options={{headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;