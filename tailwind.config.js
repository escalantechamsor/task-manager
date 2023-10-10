/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('./img/people.png')",
        light: "url('./img/light.jpg')",
        first: "url('./img/first.svg')",
        twoo: "url('./img/twoo.svg')",
        first: "url('./img/first.svg')",
        three: "url('./img/three.svg')",
        woman: "url('./img/woman.jpg')",
        mujer: "url('./img/mujer.jpg')",
        womanred: "url('./img/womanred.jpg')",
        womandesk: "url('./img/womandesk.jpg')",
        libro: "url('./img/libro.jpg')",
        nota: "url('./img/nota.jpg')",
        archive: "url('./img/archive.jpg')",
        glasses: "url('./img/glasses.jpg')",
        escritorio: "url('./img/escritorio.jpg')",
        clock: "url('./img/clock.svg')",
        coffee: "url('./img/coffee.svg')",
        andrea: "url('./img/andrea.jpg')",
        maria: "url('./img/maria.jpg')",
        peter: "url('./img/peter.jpg')",
        richard: "url('./img/richard.jpg')",
        samad: "url('./img/samad.jpg')",
        stefan: "url('./img/stefan.jpg')",
        agenda: "url('./img/agenda.jpg')",
        camera: "url('./img/camera.jpg')",
        whitedesk: "url('./img/whitedesk.jpg')",
        letras: "url('./img/letras.jpg')",
        planer: "url('./img/planer.jpg')",
        perfilfirst: "url('./img/perfilfirst.jpg')",
        perfilsecond: "url('./img/perfilsecond.jpg')",

      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounceslow 1s ease-in-out infinite ",
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceslow: {
          "0%, 100%": {
            transform: "scale(0)",
            'animation-timing-function': 'cubic-bezier(.29,.28,.46,.25)'
            
            
          },
          "50%": {
            transform: "scale(0.3)",
            'animation-timing-function': 'cubic-bezier(.29,.28,.46,.25)'
          },
        },
      },
    },
  },
  plugins: [],
};
