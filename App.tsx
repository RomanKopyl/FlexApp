
import React from 'react';

import { ThemeProvider } from './src/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';


function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
