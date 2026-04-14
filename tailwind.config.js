/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Courier New', 'Courier', 'monospace'],
        mono: ['Courier New', 'Courier', 'monospace']
      }
    },
  },

  daisyui: {
    themes: [
      {
        dark: {
          'color-scheme':        'dark',
          'primary':             '#e5e5e5',
          'primary-content':     '#111111',
          'secondary':           '#a3a3a3',
          'secondary-content':   '#111111',
          'accent':              '#737373',
          'accent-content':      '#111111',
          'neutral':             '#404040',
          'neutral-content':     '#d4d4d4',
          'base-100':            '#0f0f0f',
          'base-200':            '#1a1a1a',
          'base-300':            '#262626',
          'base-content':        '#e5e5e5',
          'info':                '#a3a3a3',
          'success':             '#a3a3a3',
          'warning':             '#a3a3a3',
          'error':               '#f87171',
        },
      },
    ],
  },

  plugins: [
    require('daisyui'),
  ],
}

