module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screen: {
      'xs': "476px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",

     '2xl-mx':{'max':'1535px'},
     'xl-mx':{'max':'1279px'},
     'lg-mx':{'max':'1023px'},
     'md-mx':{'max':'767px'},
     'sm-mx':{'max':'639px'},
     'xs-mx':{'max':'475px'},

    },
    extend: {
      colors: {
        // bgColor: "#0A192F",
        bgColor:"#112240",
        primaryColor: "#64FFDA",
        textColor: "#8892B0",
      },
    },
  
  },
  plugins: [],
};
