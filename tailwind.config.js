module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        button_b_bg: "#F4F4F4",
        button_t_bg: "#F4F4F4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
