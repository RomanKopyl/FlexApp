import Slider from '@react-native-community/slider';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User } from '../../res';
import { ThemeContext } from '../ThemeContext';

const UserSlider = () => {
  const data = useContext(ThemeContext);
  const [size, setSize] = useState(70);
  const [fontSize, setFontSize] = useState(20);

  const onIconSizeChange = (value: number) => {
    // Change icon size
    const newSize = 200 * value;
    setSize(newSize);
  };

  const onUserNameSizeChange = (value: number) => {
    // Change userName font size
    setFontSize(50 * value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <User
          width={size}
          height={size}
          fill={data?.currentTheme?.primeColor}
        />
      </View>

      <Slider
        style={styles.slider}
        value={0.5}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={data?.currentTheme.minimumTrackTintColor}
        maximumTrackTintColor={data?.currentTheme.maximumTrackTintColor}
        thumbTintColor={data?.currentTheme.thumbTintColor}
        onValueChange={onIconSizeChange}
      />
      <View style={styles.userNameContainer}>

        <Text style={[styles.userName, { fontSize: fontSize, color: data?.currentTheme.textColor }]}>
          Roman Kopyl
        </Text>
      </View>

      <Slider
        style={styles.slider}
        value={0.5}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={data?.currentTheme.minimumTrackTintColor}
        maximumTrackTintColor={data?.currentTheme.maximumTrackTintColor}
        thumbTintColor={data?.currentTheme.thumbTintColor}
        onValueChange={onUserNameSizeChange}
      />
    </View>
  );
}

export default UserSlider

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    textAlign: 'center',
  },
  slider: {
    width: 200,
    height: 40,
  },
})