const font = {
  Large1_48: "48px",
  Large2_36: "36px",
  Large3_32: "32px",

  Medium1_30: "30px",
  Medium2_24: "24px",
  Medium3_23: "23px",
  Medium4_22: "22px",
  Medium5_20: "20px",

  Small1_16: "16px",
  Small2_15: "15px",
  Small3_14: "14px",
  Small4_13: "13px",
  Small5_12: "12px",
  Small6_11: "11px",
} as const;

export type fontSizeThemeKey = keyof typeof font;

export default font;