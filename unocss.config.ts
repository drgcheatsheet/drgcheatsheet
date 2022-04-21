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

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetWind(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        ul: {
          margin: '0',
        },
        p: {
          margin: '0',
        },
        h2: {
          margin: '0',
        },
        h3: {
          margin: '1em 0 0',
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
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
