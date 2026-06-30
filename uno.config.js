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
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      info: 'var(--color-info)',
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
      border: 'var(--color-border)',
      hover: 'var(--color-hover)',
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
      text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
      }
    },
    boxShadow: {
      soft: 'var(--shadow-soft)',
      medium: 'var(--shadow-medium)',
      hard: 'var(--shadow-hard)',
      glass: 'var(--shadow-glass)',
      floating: 'var(--shadow-floating)',
      modal: 'var(--shadow-modal)',
      dropdown: 'var(--shadow-dropdown)',
    },
    borderRadius: {
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      pill: 'var(--radius-pill)',
    }
  },
  shortcuts: {
    'btn-base': 'px-4 py-2 border-2 border-border rounded-md font-bold transition-all duration-100 inline-flex items-center justify-center gap-2 cursor-pointer select-none focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed hover:bg-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[2px_2px_0px_0px_var(--color-border)]',
    'card-base': 'bg-surface border-2 border-border rounded-md p-6 shadow-[4px_4px_0px_0px_var(--color-border)] transition-all duration-100 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_var(--color-border)]',
    'glass-panel': 'bg-surface/90 backdrop-blur-sm border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)]',
    'input-base': 'w-full px-3.5 py-2 border-2 border-border rounded-md bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:bg-hover transition-all duration-100',
    'flex-center': 'flex items-center justify-center',
  }
})
