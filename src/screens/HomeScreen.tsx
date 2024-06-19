import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import Header from '../components/Header';
import UserSlider from '../components/UserSlider';
import CollorsChoise from '../components/CollorsChoise';

const HomeScreen = () => {
  const data = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, {
      backgroundColor: data?.currentTheme.containerBackgroundColor
    }]}>
      <StatusBar
        barStyle={data?.isSwitchOn ? 'light-content' : 'dark-content'}
        backgroundColor={data?.currentTheme.containerBackgroundColor}
      />
      <Header />
      <UserSlider />
      <CollorsChoise />

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})