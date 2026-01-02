import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const QuizAppPreset = definePreset(Aura, {
  semantic: {
    /* ===============================
     * PRIMARY
     * =============================== */
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    },

    /* ===============================
     * COMPONENT OVERRIDES (GLOBAL)
     * =============================== */
    components: {
      menubar: {
        root: {
          background: '{surface.0}',
          borderColor: '{surface.200}'
        }
      }
    },

    /* ===============================
     * COLOR SCHEME
     * =============================== */
    colorScheme: {
      /* ---------- LIGHT MODE ---------- */
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        }
      },

      /* ---------- DARK MODE ---------- */
      dark: {
        surface: {
          0: '{slate.950}',
          50: '{slate.900}',
          100: '{slate.800}',
          200: '{slate.700}',
          300: '{slate.600}',
          400: '{slate.500}',
          500: '{slate.400}',
          600: '{slate.300}',
          700: '{slate.200}',
          800: '{slate.100}',
          900: '{slate.50}',
          950: '#020617'
        },

        components: {
          menubar: {
            root: {
              background: '{surface.900}',
              borderColor: '{surface.700}'
            }
          }
        }
      }
    }
  }
});
