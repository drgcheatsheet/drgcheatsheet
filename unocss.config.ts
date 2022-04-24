import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind,
  // presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-scrollbar-variant'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    { 'scrollbar-thin-all': 'scrollbar:w-2 scrollbar:h-2 scrollbar-thin' },
    [
      /^scrollbar-bg-(track|thumb)-(.*)$/,
      ([, section, color]) => `scrollbar-${section}:bg-${color} scrollbar-${section}-${color}`,
    ],
  ],
  presets: [
    presetWind(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        'ul': {
          margin: '0',
        },
        'p': {
          margin: '0',
        },
        'h2': {
          'margin': '0',
          'font-weight': 'bold',
          'color': '#ffd300',
        },
        'h3': {
          'margin': '1rem 0 0',
          'font-weight': 'inherit',
          'color': '#ffd300',
        },
        'h4': {
          'margin': '0',
          'padding-top': '1rem',
          'font-weight': 'inherit',
          'color': '#ffd300',
        },
        'a': {
          color: '#fde784',
        },
        'a:visited': {
          color: '#1163ed',
        },
        'a:hover': {
          color: '#c4b467',
        },
        'a::after': {
          content: '\'↗\'',
        },
        'ol': {
          margin: '0.5rem 0 0.5rem',
        },
        'table': {
          'border-collapse': 'collapse',
        },
        'table td': {
          border: '1px solid white',
        },
        'table th': {
          'border': '1px solid white',
          'border-top': '0',
          'border-left': '0',
          'border-right': '0',
        },
        'table tr:first-child td': {
          'border-top': '0',
        },
        'table tr td:first-child': {
          'border-left': '0',
        },
        'table tr:last-child td': {
          'border-bottom': '0',
        },
        'table tr td:last-child': {
          'border-right': '0',
        },
      },
    }),
    presetIcons({
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'PT Sans Narrow',
        /*      serif: 'DM Serif Display',
                mono: 'DM Mono', */
      },
    }),
    presetScrollbar(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    breakpoints: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
})
