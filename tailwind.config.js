/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
          "grey-1": "#4F6076",
          "primary-blue": "#69A2FF",
          "secondary-blue": "#0B2341",
          "fog-soft": "#F7F8F6"
         },
         backgroundColor: {
            "grey-1": "#ECEBE7",
            "off-white": "#F7F8F6",
         },
         backgroundImage:{
          "video-bg": "url('./assets/images/video-bg.png')"
         },
         fontFamily: {
            body: ["Campton", "serif"],
            display: ["Campton", "serif"],
            Campton: ["Campton", "serif"],
            campton: ["Campton", "serif"],
         },
         screens: {
            xs: "375px",
            xs1: "410px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px",
            xxxl: "1600px",
         },
      },
   },
   plugins: [],
};
