import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigation';
import {ThemeProvider} from './context/SettingsContext';

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
    </ThemeProvider>

  );
};

export default App;