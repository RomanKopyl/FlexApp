import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext';
import Header from '../components/Header';

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

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})