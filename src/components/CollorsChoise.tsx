import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorType, ThemeContext } from '../ThemeContext';
import { COLORS } from '../colorsPallete';

const CollorsChoise = () => {
  const data = useContext(ThemeContext);
  const colors = Object.keys(ColorType);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: data?.currentTheme.textColor }]}>
        Choose the colors theme
      </Text>
      <View style={styles.themeContainer}>
        {
          COLORS.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.colorButton, { backgroundColor: item.primeColor }]}
                onPress={() => {
                  data?.setCurrentColorsType(colors[index] as ColorType);
                }}
              />
            );
          })
        }
      </View>
    </View>
  )
}

export default CollorsChoise

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  themeContainer: {
    flexDirection: 'row',
  },
  colorButton: {
    marginTop: 10,
    width: 60,
    height: 60,
    borderColor: 'white',
    borderWidth: 2,
    marginHorizontal: 2,
  },
});