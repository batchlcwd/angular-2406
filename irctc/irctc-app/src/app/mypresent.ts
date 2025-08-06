// mypreset.ts
import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';

export const MyPreset = definePreset(Material, {
  semantic: {
    // ✅ Replace dull zinc palette with vibrant sky or indigo
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },

    // ✅ Define contrast and interaction colors for both themes
    colorScheme: {
      light: {
        primary: {
          color: '{sky.700}', // Default button/text/icon color
          inverseColor: '#ffffff', // Text on colored bg
          hoverColor: '{sky.800}', // Hover state
          activeColor: '{sky.900}', // Active/pressed state
        },
        highlight: {
          background: '{sky.100}', // Highlight background (hover rows, tabs)
          focusBackground: '{sky.200}', // When element is focused
          color: '{sky.900}', // Text/icon inside highlight
          focusColor: '{sky.900}', // Focused icon/text
        },
      },

      dark: {
        primary: {
          color: '{sky.300}',
          inverseColor: '#0f172a', // Slightly dark blue-gray
          hoverColor: '{sky.200}',
          activeColor: '{sky.100}',
        },
        highlight: {
          background: 'rgba(94, 234, 212, 0.12)', // emerald-300 translucent
          focusBackground: 'rgba(94, 234, 212, 0.18)',
          color: 'rgba(255, 255, 255, 0.9)',
          focusColor: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  },
});
