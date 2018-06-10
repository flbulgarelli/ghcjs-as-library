function ghcjsBinding(functionName) {
  return eval("h$mainZCMainzi" + functionName);
}

function ghcjsApply(fun, arg) {
  return h$c2(h$ap1_e, fun, arg);
}

// For wrapping functions of type
// f :: IO JSString
function ghcjsWrapperJSString(functionName) {
  let fun = ghcjsBinding(functionName);
  return () => h$runSyncReturn(fun) ;
}

// For wrapping functions of type
// f :: IO ()
function ghcjsWrapperUnit(functionName) {
  let fun = ghcjsBinding(functionName);
  return () => { h$runSync(fun)} ;
}

// For wrapping functions of type
// f :: JSVal -> IO ()
function ghcjsWrapperJSValUnit(functionName) {
  let fun = ghcjsBinding(functionName);
  return (arg) => { h$runSync(ghcjsApply(fun, arg)) };
}

// For wrapping functions of type
// f :: Int -> IO ()
let ghcjsWrapperNumberUnit = ghcjsWrapperJSValUnit;

// For wrapping functions of type
// f :: Bool -> IO ()
let ghcjsWrapperBooleanUnit = ghcjsWrapperJSValUnit;

// For wrapping functions of type
// f :: JSString -> IO ()
function ghcjsWrapperJSStringUnit(functionName) {
  let fun = ghcjsBinding(functionName);
  return (arg) => { h$runSync(ghcjsApply(fun, h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, arg))) };
}

module.exports = {
  main: ghcjsWrapperUnit("main"),
  ukaraaIO: ghcjsWrapperUnit("ukaraaIO"),
  kemeroonIO: ghcjsWrapperNumberUnit("kemeroonIO"),
  xinaiuIO: ghcjsWrapperJSStringUnit("xinaiuIO"),
  laimaDaraaIO: ghcjsWrapperJSString("laimaDaraaIO"),
  volvioBelixaMelicaanIO: ghcjsWrapperJSVal("volvioBelixaMelicaanIO"),
  cantidadDeSupremosIO: ghcjsWrapperJSVal("cantidadDeSupremosIO")
}
