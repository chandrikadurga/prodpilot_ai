import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        50: 'var(--color-primary-50)',
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        50: 'var(--color-secondary-50)',
        100: 'var(--color-secondary-100)',
        200: 'var(--color-secondary-200)',
        300: 'var(--color-secondary-300)',
        400: 'var(--color-secondary-400)',
        500: 'var(--color-secondary-500)',
        600: 'var(--color-secondary-600)',
        700: 'var(--color-secondary-700)',
        800: 'var(--color-secondary-800)',
        900: 'var(--color-secondary-900)',
      },
      success: {
        DEFAULT: 'var(--color-success)',
        50: 'var(--color-success-50)',
        100: 'var(--color-success-100)',
        500: 'var(--color-success-500)',
        600: 'var(--color-success-600)',
      },
      warning: {
        DEFAULT: 'var(--color-warning)',
        50: 'var(--color-warning-50)',
        100: 'var(--color-warning-100)',
        500: 'var(--color-warning-500)',
        600: 'var(--color-warning-600)',
      },
      danger: {
        DEFAULT: 'var(--color-danger)',
        50: 'var(--color-danger-50)',
        100: 'var(--color-danger-100)',
        500: 'var(--color-danger-500)',
        600: 'var(--color-danger-600)',
      },
      neutral: {
        50: 'var(--color-neutral-50)',
        100: 'var(--color-neutral-100)',
        200: 'var(--color-neutral-200)',
        300: 'var(--color-neutral-300)',
        400: 'var(--color-neutral-400)',
        500: 'var(--color-neutral-500)',
        600: 'var(--color-neutral-600)',
        700: 'var(--color-neutral-700)',
        800: 'var(--color-neutral-800)',
        900: 'var(--color-neutral-900)',
      },
    },
    boxShadow: {
      soft: 'var(--shadow-soft)',
      medium: 'var(--shadow-medium)',
      hard: 'var(--shadow-hard)',
      glass: 'var(--shadow-glass)',
    },
    borderRadius: {
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
    }
  },
  shortcuts: {
    'btn-base': 'px-4 py-2 rounded-lg font-semibold transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-2 cursor-pointer border border-transparent select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    'card-base': 'bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-xl p-6 shadow-soft transition-all duration-200 hover:shadow-medium',
    'glass-panel': 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/20 dark:border-neutral-800/40 shadow-glass',
    'input-base': 'w-full px-3.5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200',
    'flex-center': 'flex items-center justify-center',
  }
})
