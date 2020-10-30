import { spacings, layout, textStyles, colorPalette } from "./styleguide";

const defaultTheme = {
  layout,
  spacings,
  components: {
    button: {
      buttonSecondary: {
        textStyle: textStyles.buttonSecondaryDefault,
        default: {
          color: colorPalette.muted,
          hoverColor: colorPalette.primary,
        },
        blue: {
          color: colorPalette.cta,
          hoverColor: colorPalette.primary,
        },
        checked: {
          color: colorPalette.primary,
        },
        unchecked: {
          color: colorPalette.muted,
        },
      },
    },
  },
};

export default {
  default: defaultTheme,
};
