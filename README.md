# Trying WebAssembly

I Forked [this project](https://github.com/second-state/ssvm-nodejs-starter) to create my own Rust functions in Node.js and try web assembly, as some Calculator.

For front-end's design and logic, I used [this react calculator](https://github.com/ahfarmer/calculator), and I changed a bit to use fetch API, and with that, the back-end's Rust functions.

## Use Docker to build and run

1. Fisrtly clone this repo
2. In a terminal build the app's Front-end

```
$ cd node/public
$ yarn install
$ yarn build
```

3. Then use Docker to build and run

```
$ docker run -p 3000:3000 --rm -it -v $(pwd):/app secondstate/ssvm-nodejs-starter:v1
(docker) # cd /app
(docker) # ssvmup build
(docker) # node node/app.js
```

"

## Read more:

- [The Case for WebAssembly on the Server-side](https://www.secondstate.io/articles/why-webassembly-server/)
- [Guide on how to Rust and WebAssembly for server-side apps](https://www.secondstate.io/articles/getting-started-with-rust-function/)
- [Wasm learning](https://github.com/second-state/wasm-learning/tree/master/nodejs/quadratic)
- [Image recognition as a web service](https://www.secondstate.io/articles/artificial-intelligence/)
- [Machine learning and visualization](https://www.secondstate.io/articles/machine-learning/)

## Resources

- [The Second State VM (SSVM)](https://github.com/second-state/ssvm) is a high performance [WebAssembly virtual machine](https://www.secondstate.io/ssvm/) designed for server-side applications.
- [The SSVM NPM addon](https://github.com/second-state/ssvm-napi) provides access to the SSVM, and programs in it, through a Node.js host application.
- [The SSVM ready tool, ssvmup](https://github.com/second-state/ssvmup) is a [toolchain](https://www.secondstate.io/articles/ssvmup/) for compiling Rust programs into WebAssembly, and then make them accessible from JavaScripts via the SSVM.

Brought to you by the Open source dev team at [Second State](https://www.secondstate.io/). Follow us on [Twitter](https://twitter.com/secondstateinc), [Facebook](https://www.facebook.com/SecondState.io/), [LinkedIn](https://www.linkedin.com/company/second-state/), [YouTube](https://www.youtube.com/channel/UCePMT5duHcIbJlwJRSOPDMQ), or [Medium](https://medium.com/wasm)

"
