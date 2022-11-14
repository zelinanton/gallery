import React from 'react';
import { View, Image, Button } from 'react-native';
import { Navbar } from './Navbar';
import { List } from './List';

export const HomeScreen = () => {  
    return (
    <View>
        <Navbar/>
        <List/>
    </View>
    )
}