
import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../constants";
import { Appearance } from "react-native";

export type Data = {
  isSwitchOn: boolean,
  setIsSwitchOn: (value: boolean) => void,
  currentTheme: any,
  setCurrentTheme: (value: any) => void,
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

