import { css } from "styled-components";

export const colorPalette = {
  muted: "#757575",
  primary: "#f05324",
  cta: "#007aff",
};

export const spacings = {
  spacing_xxxs: "2px",
  spacing_xxs: "4px",
  spacing_xxss: "6px",
  spacing_xs: "8px",
  spacing_s: "12px",
  spacing_m: "16px",
  spacing_l: "20px",
  spacing_xl: "24px",
  spacing_xxl: "28px",
  spacing_xxl_2: "32px",
  spacing_xxl_3: "36px",
};

export const textStyles = {
  buttonSecondaryDefault: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: "#757575";
  `,
};

export const layout = {
  sidebar: {
    default: 260,
    collapsed: 80,
    sidebarShadow:
      "0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 0 0 0 rgba(0, 0, 0, 0.07), 0 0px 1px -1px rgba(0, 0, 0, 0.06)",
    brand: {
      height: 96,
      bgColor: "#f05324",
    },
    menu: {
      itemHeight: 56,
    },
  },
  footer: {
    default: 42,
    borderTop: `solid 1px #e0e0e0`,
  },
};
