import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#7C7C7C",
  primaryBright: "#ffffff",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  navbackground: "rgba(245, 245, 245, 1)",
  blackWhite : "#000000",
  whiteBlack : "#ffffff",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  aboutUsBackground: "#000000",
  artistsBackground: "#2C2C2C",
  alertBackgroundColor :"#3E8BFF",
  activeMobileNav: "#F5F5F5",
  cartActionBg : "#2F2F2F"
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "rgba(29, 29, 29, 1)",
  navbackground: "rgba(47, 47, 47, 1)",
  blackWhite : "#ffffff",
  whiteBlack : "#000000",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  primaryDark: "#0098A1",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  aboutUsBackground: "#000000",
  artistsBackground: "#2C2C2C",
  alertBackgroundColor :"#3E8BFF",
  activeMobileNav: "#2F2F2F",
  cartActionBg : '#C4C4C4'

};
