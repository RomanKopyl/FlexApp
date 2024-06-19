
import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { COLORS, getColorsFromType, getDarkThemeFromType, getLightThemeFromType } from "./colorsPallete";

const colors = getDarkThemeFromType();
export type ColorTheme = typeof colors;
export type ColorThemeType = 'darkTheme' | 'lightTheme';
export type ColorPallete = typeof COLORS[0];

export type Data = {
  isSwitchOn: boolean,
  setIsSwitchOn: (value: boolean) => void,
  currentTheme: ColorTheme,
  setCurrentThemeType: (value: ColorThemeType) => void,
  setCurrentColorsType: (value: ColorType) => void,
};

export enum ColorType {
  blue = 'blue',
  green = 'green',
  brown = 'brown'
}

const ThemeContext = createContext<Data | undefined>(undefined);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentThemeType, setCurrentThemeType] = useState<ColorThemeType>('lightTheme');
  const [currentColorsType, setCurrentColorsType] = useState<ColorType>(ColorType.blue);
  const [currentTheme, setCurrentTheme] = useState(colors);

  useEffect(() => {
    // Use this scheme after first installation, then take from local storage (TODO: add local storage)
    const colorScheme = Appearance.getColorScheme();

    if (colorScheme === 'dark') {
      setCurrentThemeType('darkTheme');
    } else {
      setCurrentThemeType('lightTheme');
    }
  }, []);


  useEffect(() => {
    const newTheme = getColorsFromType(currentColorsType);

    // Change current Theme only here every time, when changing currentColorsType or currentThemeType
    if (currentThemeType === 'darkTheme') {
      setCurrentTheme(getDarkThemeFromType(newTheme));
    } else {
      setCurrentTheme(getLightThemeFromType(newTheme));
    }
  }, [currentColorsType, currentThemeType]);


  return (
    <ThemeContext.Provider value={{
      isSwitchOn,
      setIsSwitchOn,
      currentTheme,
      setCurrentThemeType,
      setCurrentColorsType,
    }}>
      {
        children
      }
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };

