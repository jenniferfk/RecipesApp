import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useTheme} from '../context/SettingsContext';

const SettingsScreen = () => {
     const { theme, toggleTheme } = useTheme();
    return (
        <View style={theme == 'light' ? styles.container_light : styles.container_dark}>
        <Text style={styles.text}>We are on {theme} mode!</Text>
        <TouchableOpacity style={theme == 'light' ? styles.button_light : styles.button_dark}>
          <Text style={styles.buttonText} onPress={toggleTheme}>Switch Mode</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: '#993ef7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#3c1663',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#FFFDCB',
        fontWeight: 'bold',
    },
    button_light: {
        backgroundColor: '#FF3EA5',
        width: 150,
        height: 50, 
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop:20,
      },
      button_dark: {
        backgroundColor: '#a10056',
        width: 150,
        height: 50, 
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop:20,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
      },
      text:{
        fontSize: 20,
        color: '#FFFDCB',
        textAlign: 'center',
      },

});

export default SettingsScreen;
