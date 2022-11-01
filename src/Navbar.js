import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}><b>Gallery</b></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3949ab",
        paddingTop: 10
    },
    text: {
        color: 'white',
        fontSize: 36
    }
})