/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Appearance,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme
} from 'react-native';

import { darkTheme, lightTheme } from './constants';
import styles from './styles';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isSwitchOn, setIsSwitchOn] = useState(isDarkMode);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    const newTheme = isSwitchOn ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: currentTheme.containerBackgroundColor
    }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={currentTheme.containerBackgroundColor}
      />
      <Text style={[styles.title, { color: currentTheme.textColor }]}>
        Hello
      </Text>
      <Pressable style={currentTheme.switchButtonBackgroundColor} onPress={toggleSwitch}>
        <Text style={{ color: currentTheme.textColor }}>Change Theme</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;
