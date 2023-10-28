import color from "/src/styles/color"
import font from "/src/styles/font"

const theme = {
  color,
  font
} as const;

export type AppTheme = typeof theme;

export default theme;
