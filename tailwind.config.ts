import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['var(--font-sora)'],
        grotesk: ['var(--font-grotesk)'],
        sans: ['var(--font-sans)'],
      },
      colors: {
        primaryWaterBlue: '#30c5ff',
        midnightDarkBlue: '#2d3353',
        neutralColor10: '#fff',
        neutralColor20: '#f4f4f4',
        //       --neutral-color-20: #f4f4f4;
        // --neutral-color-30: #bababa;
        // --neutral-color-40: #989898;
        // --neutral-color-50: #5d5d5d;
        // --neutral-color-60: #3f3f3f;
        // --neutral-color-70: #0a0a0a;
      },
      keyframes: {
        slidein: {
          '0%': { right: '-60%' },
          '100%': { right: '0' },
        },
        slideout: {
          '0%': { right: '0%' },
          '100%': { right: '-60%' },
        },
      },
      animation: {
        slidein: 'slidein 800ms ease-in-out',
        slideout: 'slideout 800ms ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
