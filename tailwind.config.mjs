/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface-tint': '#abd600',
        'secondary-container': '#4a4949',
        'surface': '#121414',
        'inverse-surface': '#e2e2e2',
        'on-error-container': '#ffdad6',
        'on-tertiary-fixed': '#1b1b1c',
        'primary': '#ffffff',
        'surface-bright': '#37393a',
        'on-primary': '#283500',
        'tertiary-fixed-dim': '#c8c6c5',
        'secondary-fixed-dim': '#c8c6c5',
        'surface-container-highest': '#333535',
        'on-primary-fixed-variant': '#3c4d00',
        'secondary': '#c8c6c5',
        'on-secondary-container': '#bab8b7',
        'on-background': '#e2e2e2',
        'on-primary-container': '#556d00',
        'outline': '#8e9379',
        'secondary-fixed': '#e5e2e1',
        'surface-container-high': '#282a2b',
        'on-secondary': '#313030',
        'on-tertiary': '#303030',
        'surface-container-lowest': '#0c0f0f',
        'error-container': '#93000a',
        'outline-variant': '#444933',
        'surface-variant': '#333535',
        'tertiary': '#ffffff',
        'on-tertiary-container': '#656464',
        'on-secondary-fixed-variant': '#474646',
        'on-surface-variant': '#c4c9ac',
        'on-secondary-fixed': '#1c1b1b',
        'primary-fixed': '#c3f400',
        'surface-container-low': '#1a1c1c',
        'inverse-primary': '#506600',
        'tertiary-container': '#e5e2e1',
        'on-error': '#690005',
        'background': '#121414',
        'inverse-on-surface': '#2f3131',
        'on-tertiary-fixed-variant': '#474746',
        'on-primary-fixed': '#161e00',
        'surface-container': '#1e2020',
        'primary-container': '#c3f400',
        'error': '#ffb4ab',
        'on-surface': '#e2e2e2',
        'surface-dim': '#121414',
        'tertiary-fixed': '#e5e2e1',
        'primary-fixed-dim': '#abd600'
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '0.75rem'
      },
      spacing: {
        'margin-mobile': '16px',
        'gutter': '24px',
        'stack-sm': '8px',
        'container-max': '1280px',
        'section-gap': '120px',
        'stack-lg': '32px',
        'margin-desktop': '64px',
        'stack-md': '16px'
      },
      fontFamily: {
        'display-lg': ['Montserrat', 'sans-serif'],
        'headline-sm': ['Montserrat', 'sans-serif'],
        'display-lg-mobile': ['Montserrat', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'headline-md': ['Montserrat', 'sans-serif'],
        'label-caps': ['Inter', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-sm': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'display-lg-mobile': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '600' }]
      }
    }
  },
  plugins: []
};
