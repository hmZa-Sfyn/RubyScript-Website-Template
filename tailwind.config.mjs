/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        'ruby-primary': '#D51F06',
        'ruby-secondary': '#A41803',
        'github-dark': '#0D1117',
        'github-darker': '#010409',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}