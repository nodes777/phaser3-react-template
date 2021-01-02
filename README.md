# Phaser 3 React Webpack Project Template

Built from the [Phaser 3 Template](https://github.com/photonstorm/phaser3-project-template), this boilerplate gives you Phaser and React out of the box. Full details on [Integrating React and Phaser 3 Tutorial](https://medium.com/@Tnodes/integrating-react-and-phaser-3-tutorial-eb96717d4a9d).

ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/). Includes hot-reloading for development and production-ready builds.

Loading images via JavaScript module `import` is also supported.

## Quickstart

`git clone https://github.com/nodes777/phaser3-react-template`
`npm install`
`npm start`

Note: The default browser that opens is Chrome. If you don't have Chrome or wish to change the opened browser, change the start script in package.json. More details on [this webpack-cli thread](https://github.com/webpack/webpack-cli/issues/2001).

`"start": "webpack serve --config webpack/base.js --open <your-preferred-browser.exe>"`

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `npm install`   | Install project dependencies                                                    |
| `npm start`     | Build project and open web server running project                               |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder
and webpack will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

## Customizing Template

### Babel

You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you
want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently
targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

```
"browsers": [
  ">0.25%",
  "not ie 11",
  "not op_mini all"
]
```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at
`dist/bundle.min.js` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`),
you should be able to open `http://mycoolserver.com/index.html` and play your game.
