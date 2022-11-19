import React from 'react';
import { HomeScreen } from './src/HomeScreen';
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
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;