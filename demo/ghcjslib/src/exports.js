let cambore = {
  main: ghcjsWrapperUnit("main"),
  // ukaraaIO :: IO ()
  ukaraaIO: ghcjsWrapperUnit("ukaraaIO"),
  // kemeroonIO :: Int -> IO ()
  kemeroonIO: ghcjsWrapperValueUnit("kemeroonIO"),
  // xinaiuIO :: String -> IO ()
  xinaiuIO: ghcjsWrapperStringUnit("xinaiuIO"),
  // laimaDaraaIO :: IO JSString
  laimaDaraaIO: ghcjsWrapperAny("laimaDaraaIO"),
  // volvioBelixaMelicaanIO :: IO JSVal
  volvioBelixaMelicaanIO: ghcjsWrapperAny("volvioBelixaMelicaanIO"),
  // cantidadDeSupremosIO :: IO JSVal
  cantidadDeSupremosIO: ghcjsWrapperAny("cantidadDeSupremosIO")
};

if (typeof module !== 'undefined') {
  module.exports = cambore;
}
