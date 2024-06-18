
import React, { useContext } from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import Header from './src/components/Header';
import { ThemeContext, ThemeProvider } from './src/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';


function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
