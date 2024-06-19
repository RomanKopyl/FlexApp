import React, { useContext, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { Moon, Sun } from '../../res';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
  const data = useContext(ThemeContext);

  const [animation] = useState(new Animated.Value(1));
  const [isMoving, setIsMoving] = useState(true);

  const toggleSwitch = () => {
    const newIsSwitchOn = !data?.isSwitchOn;
    data?.setIsSwitchOn(newIsSwitchOn);
    const newThemeType = newIsSwitchOn ? 'darkTheme' : 'lightTheme';
    data?.setCurrentThemeType(newThemeType);
    moveView();
  };

  const moveView = () => {
    // Responsible for animating the switch’s movement.
    // Toggles the isMoving state to indicate whether the view is in motion.
    // Calculates the destination (toValue) for the animation based on whether the view is moving in or out.
    // Uses the Animated.timing method to animate the animation value from its current value 
    // to the specified toValue. It defines the animation's duration and specifies
    // not to use the native driver for this animation.
    setIsMoving(!isMoving);
    const toValue = isMoving ? 5 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.animatedContainer}>
        <Animated.View
          style={[
            styles.box,
            {
              backgroundColor: data?.currentTheme.animationColor,
              transform: [
                { scaleX: animation.interpolate({ inputRange: [1, 5], outputRange: [1, 300] }) }, // Vary scaleX between 1 and 2
                { scaleY: animation.interpolate({ inputRange: [1, 5], outputRange: [1, 300] }) }, // Vary scaleY between 1 and 3
              ],
            },
          ]}
        />
      </View>

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
  animatedContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    right: 23,
    top: 31,
  },
  box: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
})