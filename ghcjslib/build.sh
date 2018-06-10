#!/bin/bash
set -e

GHCJSLIB_PATH=./ghcjslib
STACK_BUILD_PATH=./.stack-work/dist/x86_64-linux/Cabal-1.24.2.0_ghcjs/build/jsample-exe

function append2Lib() {
  echo ">> Appending $(basename $1)..."
  cat $1 >> $GHCJSLIB_PATH/ghcjslib.js
}

echo 'Building project...'
stack build

echo 'Building ghcjslib.js...'

echo '>> Cleaning ghcjslib.js'
rm -f $GHCJSLIB_PATH/ghcjslib.js

append2Lib $STACK_BUILD_PATH/jsample-exe.jsexe/rts.js
append2Lib $STACK_BUILD_PATH/jsample-exe.jsexe/lib.js
append2Lib $STACK_BUILD_PATH/jsample-exe.jsexe/out.js
append2Lib $GHCJSLIB_PATH/binding.js
append2Lib $GHCJSLIB_PATH/exports.js

echo "Done"
