import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-primary': '#008C95',
        'brand-dark': '#00313C',
        'brand-light': '#77E2C3',
        'base-white': '#FFFFFF',
        
        // Accent Colors
        'accent-orange': '#E04E39',
        'accent-hover': '#C43C28',
        
        // Functional Colors
        'brand-success': '#27AE60',
        'brand-warning': '#FCC217',
        'brand-error': '#FC786E',
        'brand-info': '#008DFC',
        
        // Neutral Colors
        'text-primary': '#262626',
        'text-secondary': '#3B3B3B',
        'text-disable': '#5A5A5A',
        'border-default': '#E5E5E5',
        'bg-grey': '#F5F7F8',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Desktop / Mobile responsive sizing
        'h1': ['3rem', { lineHeight: '3.75rem', letterSpacing: '-0.5px', fontWeight: '700' }], // 48px/60px
        'h1-mobile': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.5px', fontWeight: '700' }], // 32px/40px
        'h2': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '0px', fontWeight: '700' }], // 36px/44px
        'h2-mobile': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0px', fontWeight: '700' }], // 28px/36px
        'h3': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0px', fontWeight: '700' }], // 24px/32px
        'h3-mobile': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0px', fontWeight: '700' }], // 20px/28px
        'h4': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.1px', fontWeight: '500' }], // 20px/28px
        'h4-mobile': ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0.1px', fontWeight: '500' }], // 18px/24px
        'body-l': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px/28px
        'body-m': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px/24px
        'body-s': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px/20px
        'caption': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12px/16px
        'button': ['0.875rem', { lineHeight: '1rem', fontWeight: '700' }], // 14px/16px
      },
      spacing: {
        // 4px/8px multiplier system
        'xs': '0.25rem',    // 4px
        's': '0.5rem',      // 8px
        'm': '1rem',        // 16px
        'l': '1.5rem',      // 24px
        'xl': '2rem',       // 32px
        'xxl': '3rem',      // 48px
      },
      borderRadius: {
        'input': '4px',
        'card': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 49, 60, 0.05)',
        'card-hover': '0 12px 24px rgba(0, 49, 60, 0.1)',
        'button': '0 4px 12px rgba(0, 140, 149, 0.3)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

export default config;
