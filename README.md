# web-app

practise app

## Set up

### Initialize node project

`npm init`

### React

`npm install --save react react-dom`

### Webpack

`npm install --save webpack webpack-dev-server`<br>
`npm install --save-dev webpack-cli`

#### webpack configuration

webpack.config.js file

- **entry** define a entry point
- **output** where to output bundle.js
- **devServer** options for dev server
- **module** determine how different types of modules inside project will be treated <br>
  **module.rules** An array of Rules which are matched to requests when modules are created. These rules can modify how the module is created. They can apply loaders to the module, or modify the parser. <br>
  .js or .jsx files use babel-loader to transpile all

### Babel

`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`

#### Babel configuration

.babelrc file

### Files

- index.html in root dir
- index.js in root dir
-

## Resources

[How to set up & deploy your React app from scratch using Webpack and Babel](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/) <br>
[Module](https://webpack.js.org/configuration/module/) <br>
[Setting up a React project from scratch](https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97)<br>
[]()<br>
