/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-md": ["IBMPlexSans-Medium"],
        "ibm-bd": ["IBMPlexSans-Bold"],
        "ibm-sb": ["IBMPlexSans-SemiBold"],
        ibm: ["IBMPlexSans-Regular"],
      },
    },
  },
  plugins: [],
};
