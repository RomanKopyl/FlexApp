import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorType, ThemeContext } from '../ThemeContext'
import { COLORS } from '../colorsPallete';

const CollorsChoise = () => {
  const data = useContext(ThemeContext);
  const colors = Object.keys(ColorType);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: data?.currentTheme.textColor }]}>
        Choose the colors theme
      </Text>
      <View style={{
        flexDirection: 'row',
      }}>
        {
          COLORS.map((item, index) => {
            const isActive = data?.currentTheme.primeColor === item.primeColor;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorButton, {
                    backgroundColor: item.primeColor,
                    borderColor: isActive ? 'yellow' : 'white',
                    borderWidth: 2,
                    marginHorizontal: 2,
                  }]}
                onPress={() => {
                  console.log('NEW COLOR', colors[index]);
                  data?.setCurrentColorType(colors[index] as ColorType);
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
  colorButton: {
    marginTop: 10,
    width: 60,
    height: 60,
  },
});