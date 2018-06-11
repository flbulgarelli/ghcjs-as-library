module Main where

import Data.JSString as S (JSString, pack, unpack)
import GHCJS.Types (JSVal)
import GHCJS.Marshal (toJSVal)

foreign import javascript unsafe
  "console.log($1)" console_log :: S.JSString -> IO ()

ukaraa = "Yo soy Ukaraa, la serpiente bicauda"
ukaraaIO = imprimirAlgoMas . console_log . S.pack $ ukaraa

kemeroon :: Int -> String
kemeroon n = "Y yo soy Kemeroon, que se bancó " ++ show n ++ " guerras"

kemeroonIO n = console_log (S.pack (kemeroon n))

xinaiu :: String -> String
xinaiu lugar = "Soy Xinaiu, que observa desde " ++ lugar

xinaiuIO :: JSString -> IO ()
xinaiuIO lugar = console_log . pack $ (xinaiu . unpack $ lugar)

imprimirAlgoMas :: IO () -> IO ()
imprimirAlgoMas x = console_log (S.pack "algo más: ") >> x

laimaDaraa :: String
laimaDaraa = "Y yo estoy volando dese el alto cielo"

laimaDaraaIO :: IO JSString
laimaDaraaIO = return . pack $ laimaDaraa

volvioBelixaMelicaanIO :: IO JSVal
volvioBelixaMelicaanIO = toJSVal False

cantidadDeSupremos :: Int
cantidadDeSupremos = 7

cantidadDeSupremosIO :: IO JSVal
cantidadDeSupremosIO = toJSVal cantidadDeSupremos

main :: IO ()
main = do
  let cambore = S.pack . reverse  $ "cambore"

  console_log cambore

  let message = "yo" :: String
  console_log (S.pack message)
  console_log (S.pack ukaraa)
