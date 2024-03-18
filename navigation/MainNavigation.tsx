import React from 'react';
import HomeScreen from '../screens/HomeScreen.tsx';
import RecipesScreen from '../screens/RecipesScreen.tsx';
import SettingsScreen from '../screens/SettingsScreen.tsx';
import FavoriteScreen from '../screens/FavoriteScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { MainNavigatorStackParamList } from './MainNavigator.types.ts';
import {useTheme} from '../context/SettingsContext';

const MainStackNavigator = createNativeStackNavigator<MainNavigatorStackParamList>();
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.getFontScale();

const MainNavigator = () => {
  const { theme} = useTheme();
  return (
      <MainStackNavigator.Navigator 
        screenOptions={{
          headerStyle: theme === 'light' ? styles.lightHeader : styles.darkHeader,
          headerTintColor: 'white',
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: 'center'
        }}>
        <MainStackNavigator.Screen name="Home" component={HomeScreen} />
        <MainStackNavigator.Screen name="Recipes" component={RecipesScreen} />
        <MainStackNavigator.Screen name="Settings" component={SettingsScreen} />
        <MainStackNavigator.Screen name="Favorites" component={FavoriteScreen} />
      </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
const styles = StyleSheet.create({
  lightHeader: {
    backgroundColor: '#FF3EA5',
    paddingVertical: 10 * pixelRatio,
    paddingHorizontal: 20 * pixelRatio,
  },
  darkHeader:{
    backgroundColor:'#a10056',
    paddingVertical: 10 * pixelRatio,
    paddingHorizontal: 20 * pixelRatio,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20 * pixelRatio,
  },
});