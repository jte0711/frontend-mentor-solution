/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
    theme: {
    extend: {
      fontFamily: { Overpass: ["Overpass", "sans-serif"] },
      colors: {
        "cream-bg": "#F2EAE2",
        "aurometal-saurus": "#6C7289",
        "deep-aquamarine": "#3D8168",
        "deep-aquamarine-hv": "#1A4032",
        gunmetal: "#1C232B",
        "fem-darkblue": "#262E38",
        "fem-lightgrey": "#969FAD",
        "fem-mediumgrey": "#7C8798",
        "fem-orange": "#FC7614",
        "fem-verydarkblue": "#131518",
        "fem-black-grad":
          "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
      },
    },
  },
