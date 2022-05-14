module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "fadein 2.5s ease-in-out forwards",
        blink: "fadein 1s linear infinite",
      },
    },
  },
  plugins: [],
};
