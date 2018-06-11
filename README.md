# ghcjslib - Approach for bundling Haskell libraries into JavaScript reusable components

## The problem

You love Haskell and you already have developed a library that does what you need. And now you want to be able to use it in a JavaScript environment, like `node.js` or your browser. What can you do?

Fortunately, GHCJS is a GHC compilation target that allows to create Haskell executables that run on JavaScript. However, the real problem is that GHCJS is curently aimed to build Haskell standalone apps that talk to existing JavaScript code. But what we need here is the opposite: we have a Haskell library, and we want to call it from a JavaScript application.

So you have three options:

* Hack it by creating a Haskell app that registers global callbacks. It works in a inversion-of-control fashion, but this approach has several limitations and is not very flexible at all :confused:.
* Give up, and write your code again in JavaScript, Elm or PureScript. :sad:
* Understand what is happening under the hood and call the compiled Haskell functions from JavaScript. :muscle: Continue reading :eyes:

## The solution

`ghcjslib` is not a library nor a framework. It is just a very simple architecture for wrapping your Haskell library into JavaScript. And this repository is a tutorial that explains how to implement it.

At glance, what we are going to do is:

1. Compile your library with GHCJS. This step is quite straitforward, but has some caveats: compilation times and dependencies problems.
2. Write a very thin abstraction layer over GHCJS internals, since they are a bit scary - e.g. this code allows you to create a string `h$c1(h$ghcjszmprimZCGHCJSziPrimziJSVal_con_e, string)` :fear: -. The good thing is that you can skip this step and just use the bits I wrote.
3. Write some JavaScript glue-code that adapts the signatures and exposes the functions to JavaScript
4. Concatenate the GHCJS runtime, your library code and the glue-code into a single file that can be compressed, minifed, served and loaded in your browser or node program.
5. Automate those steps with a few lines of bash code.

## The demo

You can go directly to the `demo` directory and see `ghcjslib` in action.

