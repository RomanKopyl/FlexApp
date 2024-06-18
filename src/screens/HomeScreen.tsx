import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import Header from '../components/Header';
import UserSlider from '../components/UserSlider';

const HomeScreen = () => {
  const data = useContext(ThemeContext);

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: data?.currentTheme.containerBackgroundColor
    }}>
      <StatusBar
        barStyle={data?.isSwitchOn ? 'light-content' : 'dark-content'}
        backgroundColor={data?.currentTheme.containerBackgroundColor}
      />
      <Header />
      <UserSlider />

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})