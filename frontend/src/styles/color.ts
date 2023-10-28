const color = {
  black : "#000000",
  white : "#FFFFFF",

  // text color
  fontGrey1: "#818181",
  fontGrey2: "#6D6D6D",
  fontGrey3: "#616577",
  fontGrey4: "#393D50",
  fontGrey5: "#A8A8A8",
  fontPink1: "#F66457",
  fontPink2: "#FF8577",

  // button color
  grayDark: "#393D50",
  grayMedium: "#B7B7B7",
  grayLight: "#F7F6F4",

  pinkDrak: "#F66457",
  pinkLight: "#FF8577",

  blue: "#3686F4",
  
  // KTAS color
  ktas1_Active: "#006FBA",
  ktas1_Deactive: "#B0CFE5",
  ktas2_Active: "#EE1D23",
  ktas2_Deactive: "#EDBFC1",
  ktas3_Active: "#FFF101",
  ktas3_Deactive: "#FEFCD8",
  ktas4_Active: "#40AE49",
  ktas4_Deactive: "#B6D6B8",
  ktas5_Active: "#FFFFFF",
  ktas5_Deactive: "#EDEDED",
} as const;

export type colorThemeKey = keyof typeof color;

export default color;