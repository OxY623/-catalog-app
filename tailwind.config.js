import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const tailwindConfig = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [forms, typography],
};

export default tailwindConfig;
