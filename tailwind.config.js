/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1B2E', soft: '#14304F' },
        steel: { DEFAULT: '#24497A', soft: '#2F5B8F' },
        sky: '#7FA6D6',
        gold: { DEFAULT: '#D4A545', deep: '#8F6A12' },
        mist: { DEFAULT: '#F4F6F9', 2: '#E5EAF1' },
        muted: '#4A5A6E',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      keyframes: {
        reveal: { from: { clipPath: 'inset(0 100% 0 0)' }, to: { clipPath: 'inset(0 0 0 0)' } },
        bloom: { from: { opacity: 0, transform: 'scale(.92) rotate(-12deg)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: {
        reveal: 'reveal 1.6s cubic-bezier(.2,.7,.2,1) .2s both',
        bloom: 'bloom 1.1s cubic-bezier(.2,.7,.2,1) .15s both',
      },
    },
  },
  plugins: [],
}
