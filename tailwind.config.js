/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoC: ['Roboto Condensed', 'sans-serif']
      },
      backgroundImage: {
        'heart': "url('/images/heartBg.webp')",
        'bodybuilding': "url('/images/bodybuildBg.webp')",
        'bodyweight': "url('/images/BodyweightBg.webp')",
        'diet': "url('/images/dietBg.webp')",
        'sleep': "url('/images/sleepBg.webp')",
        'resistance': "url('/images/resistanceBg.webp')",
        'smartdevices': "url('/images/smartdeviceBg.jpg')",
        'massager': "url('/images/massagegunBg.webp')",
        'virtual': "url('/images/vrfitnessBg.jpeg')",
      },
      boxShadow: {
        'neon-blue': '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
        'neon-red': '0 0 5px #ff6f6f, 0 0 10px #ff6f6f, 0 0 20px #ff6f6f, 0 0 40px #ff6f6f',
      },
    }
  },
  plugins: [],
}