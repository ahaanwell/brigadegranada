/** Build: npm run build:css  (regenerate css/tailwind.css after changing classes in HTML/JS) */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: { extend: {} },
  plugins: [],
};
