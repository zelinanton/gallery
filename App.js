import React from 'react';
import { View } from 'react-native';
import { Navbar } from './src/Navbar';
import { ListItem } from './src/ListItem';
import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <View>
            <Navbar/>
            <ListItem/>
        </View>        
      </NavigationContainer>
    );    
  }
}

export default App;