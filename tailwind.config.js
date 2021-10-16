module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'noisy-v1': "url('/bg/noisyV1.png')",
        'noisy-v2': "url('/bg/noisyV2.png')",
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      16: '16px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
