#!/bin/bash
set -e

GHCJSLIB_PATH=./ghcjslib
GHCJSLIB_BUILD_PATH=$GHCJSLIB_PATH/build
GHCJSLIB_SRC_PATH=$GHCJSLIB_PATH/src
STACK_BUILD_PATH=./.stack-work/dist/x86_64-linux/Cabal-1.24.2.0_ghcjs/build/jsample-exe/jsample-exe.jsexe/

function append2Lib() {
  echo ">> Appending $(basename $1)..."
  cat $1 >> $GHCJSLIB_BUILD_PATH/ghcjslib.js
}

echo 'Building project...'
stack build

echo 'Building ghcjslib.js...'

echo '>> Cleaning ghcjslib.js'
rm -f $GHCJSLIB_BUILD_PATH/ghcjslib.js

append2Lib $STACK_BUILD_PATH/rts.js
append2Lib $STACK_BUILD_PATH/lib.js
append2Lib $STACK_BUILD_PATH/out.js
append2Lib $GHCJSLIB_SRC_PATH/binding.js
append2Lib $GHCJSLIB_SRC_PATH/exports.js

echo "Done"
