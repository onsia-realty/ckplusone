import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#3b82f6',
        accent: '#f97316',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'noto': ['Noto Sans KR', 'sans-serif'],
        'spoqa': ['Spoqa Han Sans Neo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config