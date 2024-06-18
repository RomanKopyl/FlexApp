
import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { darkTheme, lightTheme } from "../constants";

export type ColorPallete = typeof darkTheme;

export type Data = {
  isSwitchOn: boolean,
  setIsSwitchOn: (value: boolean) => void,
  currentTheme: ColorPallete,
  setCurrentTheme: (value: ColorPallete) => void,
}

const ThemeContext = createContext<Data | undefined>(undefined);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();

    if (colorScheme === 'dark') {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{
      isSwitchOn,
      setIsSwitchOn,
      currentTheme,
      setCurrentTheme,
    }}>
      {
        children
      }
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };

