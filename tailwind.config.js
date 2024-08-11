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
        'heart': "url('./src/assets/images/heartBg.webp')",
        'bodybuilding': "url('./src/assets/images/bodybuildBg.webp')",
        'bodyweight': "url('./src/assets/images/BodyweightBg.webp')",
        'diet': "url('./src/assets/images/dietBg.webp')",
        'sleep': "url('./src/assets/images/sleepBg.webp')",
        'resistance': "url('./src/assets/images/resistanceBg.webp')",
        'smartdevices': "url('./src/assets/images/smartdeviceBg.jpg')",
        'massager': "url('./src/assets/images/massagegunBg.webp')",
        'virtual': "url('./src/assets/images/vrfitnessBg.jpeg')",
      },
      boxShadow: {
        'neon-blue': '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
        'neon-red': '0 0 5px #ff6f6f, 0 0 10px #ff6f6f, 0 0 20px #ff6f6f, 0 0 40px #ff6f6f',
      },
    }
  },
  plugins: [],
}