let cambore = {
  main: ghcjsWrapperUnit("main"),
  ukaraaIO: ghcjsWrapperUnit("ukaraaIO"),
  kemeroonIO: ghcjsWrapperNumberUnit("kemeroonIO"),
  xinaiuIO: ghcjsWrapperStringUnit("xinaiuIO"),
  laimaDaraaIO: ghcjsWrapperString("laimaDaraaIO"),
  volvioBelixaMelicaanIO: ghcjsWrapperString("volvioBelixaMelicaanIO"),
  cantidadDeSupremosIO: ghcjsWrapperString("cantidadDeSupremosIO")
};

if (typeof module !== 'undefined') {
  module.exports = cambore;
}
