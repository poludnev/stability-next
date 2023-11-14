import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px',
        '2xl': '1440px',
      },
      fontFamily: {
        sora: ['var(--font-sora)'],
        grotesk: ['var(--font-grotesk)'],
        sans: ['var(--font-sans)'],
      },
      colors: {
        primaryWaterBlue: '#30c5ff',
        secondaryColorBeige: '#f6ebdb',
        midnightDarkBlue: '#2d3353',
        beige02: '#faf5ed',
        neutralColor10: '#fff',
        neutralColor20: '#f4f4f4',
        neutralColor30: '#bababa',
        neutralColor70: '#0a0a0a',
        accentColorBrightLightBlue: '#41eef9',
        accentColorOrange: '#ffc123',
        accentColorRedOrange: '#f97068',
        accentColorMint: '#a9f5c4',
        //       --neutral-color-20: #f4f4f4;
        // --neutral-color-30: #bababa;
        // --neutral-color-40: #989898;
        // --neutral-color-50: #5d5d5d;
        // --neutral-color-60: #3f3f3f;
        // --neutral-color-70: #0a0a0a;
      },
      backgroundImage: () => ({
        homeHeroMobile: 'url("../public/images/bg/home-hero-bg-mobile.webp")',
        homeHeroDesktop: 'url("../public/images/bg/home-hero-bg.webp")',
        homeMissionMoble: 'url("../public/images/bg/home-mission-bg-image-mobile.webp")',
        homeMissionDesktop: 'url("../public/images/bg/home-mission-bg-image.webp")',
        aboutHeroMoble: 'url("../public/images/bg/about-hero-bg-mobile.webp")',
        agoutHeroDesktop: 'url("../public/images/bg/about-hero-bg.webp")',
        productHero: 'url("../public/images/bg/product-hero-bg.webp")',
        footerMobile: 'url("../public/images/bg/footer-bg-mobile.webp")',
        footerDesktop: 'url("../public/images/bg/footer-bg.webp")',
      }),
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
  safelist: [
    'bg-accentColorBrightLightBlue',
    'bg-accentColorOrange',
    'bg-accentColorRedOrange',
    'bg-accentColorMint',
    'text-primaryWaterBlue',
    'text-accentColorBrightLightBlue',
  ],
};
export default config;
