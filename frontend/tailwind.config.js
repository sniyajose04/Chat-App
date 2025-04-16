// tailwind.config.js
import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'light', 'dark', 'cupcake', 'synthwave', 'dracula', 'forest', 'luxury', 'night',
      'aqua', 'retro', 'valentine', 'cyberpunk', 'halloween', 'garden', 'pastel',
      'black', 'cmyk', 'coffee', 'winter', 'dim', 'sunset', 'nord', 'lofi', 'business',
      'fantasy', 'acid', 'autumn', 'lemonade', 'emerald', 'bumblebee', 'corporate',
      'wireframe',
    ],
  },
}
