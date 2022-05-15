module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
        blink: {
          from: {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
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
        fadein: "fadein 4s ease-in-out forwards",
        blink: "blink 1s step-end infinite",
        typing: "typing 1.5s steps(12, end) forwards",
      },
    },
  },
  plugins: [],
};
