module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-main": "url('/main-hero-lg.jpg')",
        "hero-image-main-md": "url('/main-hero-md.jpg')",
        "hero-image-main-sm": "url('/main-hero-sm.jpg')",
        "areas-practica": "url('/areas-practica.jpg')",
        "facultad-derecho": "url('/facultad-derecho.jpg')",
        "about-law": "url('/about-bg.jpg')",
      },
      colors: {
        "almost-white": "#F2F2F2",
        "main-color": "#373F47",
        "subtle-color": "rgba(246,246,246,0.6)",
      },
    },
  },
};
