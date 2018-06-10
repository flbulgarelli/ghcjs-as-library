function ghcjsBinding(functionName) {
  return eval("h$mainZCMainzi" + functionName);
}

function ghcjsApply(fun, arg) {
  return h$c2(h$ap1_e, fun, arg);
}

function ghcjsWrapperString(functionName) {
  let fun = ghcjsBinding(functionName);
  return () => h$runSyncReturn(fun) ;
}

function ghcjsWrapperUnit(functionName) {
  let fun = ghcjsBinding(functionName);
  return () => { h$runSync(fun)} ;
}

function ghcjsWrapperPrimitiveUnit(functionName) {
  let fun = ghcjsBinding(functionName);
  return (arg) => { h$runSync(ghcjsApply(fun, arg)) };
}

let ghcjsWrapperNumberUnit = ghcjsWrapperPrimitiveUnit;
let ghcjsWrapperBooleanUnit = ghcjsWrapperPrimitiveUnit;

function ghcjsWrapperStringUnit(functionName) {
  let fun = ghcjsBinding(functionName);
  return (arg) => { h$runSync(ghcjsApply(fun, h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, arg))) };
}
