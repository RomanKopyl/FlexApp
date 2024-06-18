
const COLORS = {
  primeColor: '#102C57',
  secondaryColor: '#1679AB',
  thirdColor: '#FFB1B1',
  fouthColor: '#FFCBCB',
}

export const darkTheme = {
  primeColor: COLORS.fouthColor,
  secondaryColor: COLORS.thirdColor,
  containerBackgroundColor: COLORS.primeColor,
  textColor: COLORS.fouthColor,
  minimumTrackTintColor: COLORS.secondaryColor,
  maximumTrackTintColor: COLORS.fouthColor,
  thumbTintColor: COLORS.secondaryColor,
};

export const lightTheme = {
  primeColor: COLORS.primeColor,
  secondaryColor: COLORS.secondaryColor,
  containerBackgroundColor: 'white',
  textColor: COLORS.primeColor,
  minimumTrackTintColor: COLORS.primeColor,
  maximumTrackTintColor: COLORS.secondaryColor,
  thumbTintColor: COLORS.primeColor,
};