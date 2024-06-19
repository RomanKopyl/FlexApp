import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Moon, Sun } from '../../res';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
  const data = useContext(ThemeContext);

  const toggleSwitch = () => {
    const newIsSwitchOn = !data?.isSwitchOn;
    data?.setIsSwitchOn(newIsSwitchOn);
    const newThemeType = newIsSwitchOn ? 'darkTheme' : 'lightTheme';
    data?.setCurrentThemeType(newThemeType);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: data?.currentTheme.textColor }]}>
        FlexApp
      </Text>
      <Pressable
        style={styles.themeButton}
        onPress={toggleSwitch}
      >
        {
          data?.isSwitchOn
            ? <Moon fill={data?.currentTheme.primeColor} />
            : <Sun fill={data?.currentTheme.primeColor} />
        }
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  themeButton: {
    position: 'absolute',
    right: 10,
    top: 18
  },
})