import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { User } from '../../res';
import { ThemeContext } from '../ThemeContext';
import Slider from '@react-native-community/slider';

const UserSlider = () => {
  const data = useContext(ThemeContext);
  const [size, setSize] = useState(70);

  const onValueChange = (value: number) => {
    // Change icon size
    const newSize = 200 * value;
    setSize(newSize);
  }

  return (
    <View style={{
      alignItems: 'center'
    }}>
      <View style={{
        height: 250,
        justifyContent: 'center'
      }}>
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
        onValueChange={onValueChange}
      />
    </View>
  );
}

export default UserSlider

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 200,
  },
  slider: {
    width: 200,
    height: 40,
  },
})