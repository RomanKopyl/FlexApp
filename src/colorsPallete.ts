import { ColorPallete, ColorType } from "./ThemeContext";

export const COLORS = [
  {
    primeColor: '#102C57',
    secondaryColor: '#1679AB',
    thirdColor: '#FFB1B1',
    fouthColor: '#FFCBCB',
  },
  {
    primeColor: '#254336',
    secondaryColor: '#6B8A7A',
    thirdColor: '#B7B597',
    fouthColor: '#DAD3BE',
  },
  {
    primeColor: '#6F4E37',
    secondaryColor: '#A67B5B',
    thirdColor: '#ECB176',
    fouthColor: '#FED8B1',
  }
];

export const getColorsFromType = (colorType: ColorType) => {
  switch (colorType) {
    case 'blue':
      return COLORS[0];
    case 'green':
      return COLORS[1];
    case 'brown':
      return COLORS[2];

    default:
      return COLORS[0];
  }
}

export const darkTheme = (colors: ColorPallete = COLORS[0]) => {
  return {
    primeColor: colors.fouthColor,
    secondaryColor: colors.thirdColor,
    containerBackgroundColor: colors.primeColor,
    textColor: colors.fouthColor,
    minimumTrackTintColor: colors.secondaryColor,
    maximumTrackTintColor: colors.fouthColor,
    thumbTintColor: colors.secondaryColor,
  };
};

export const lightTheme = (colors: ColorPallete = COLORS[0]) => {
  return {
    primeColor: colors.primeColor,
    secondaryColor: colors.secondaryColor,
    containerBackgroundColor: 'white',
    textColor: colors.primeColor,
    minimumTrackTintColor: colors.primeColor,
    maximumTrackTintColor: colors.secondaryColor,
    thumbTintColor: colors.primeColor,
  };
};