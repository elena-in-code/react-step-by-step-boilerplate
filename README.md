# web-app

practice app

## Set up application from scratch

### Initialize node project

`npm init`

### React

`npm install --save react react-dom`

### Webpack

`npm install --save webpack webpack-dev-server`<br>
`npm install --save-dev webpack-cli` or `npm i -D webpack-cli`

#### webpack configuration

webpack.config.js file

- **entry** define a entry point
- **output** where to output bundle.js
- **devServer** options for dev server
- **module** determine how different types of modules inside project will be treated <br>
  **module.rules** An array of Rules which are matched to requests when modules are created. These rules can modify how the module is created. They can apply loaders to the module, or modify the parser. <br>
  .js or .jsx files use babel-loader to transpile all

### Babel

`npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev` or `npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react`

#### Babel configuration

.babelrc file

### Files

- index.html in root dir
- index.js in root dir
- .\src\containers\App.js

### ESLint

`npm install eslint --save-dev` or `npm i -D eslint`

#### ESLint configuration

`npx eslint --init`

- `eslint-plugin-prettier`: Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- `eslint-config-prettier`: Turns off all rules that are unnecessary or might conflict with Prettier.
- `npx install-peerdeps --dev eslint-config-airbnb`: This package provides Airbnb's .eslintrc as an extensible shared config.

### Prettier

`npm install prettier --save-dev` or `npm i -D prettier`

#### Prettier configuration

## Resources

[How to set up & deploy your React app from scratch using Webpack and Babel](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/) <br>
[Module](https://webpack.js.org/configuration/module/) <br>
[Setting up a React project from scratch](https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97)<br>
[How to set up a React project from scratch](https://dev.to/kris/how-to-set-up-a-react-project-from-scratch-4ob)<br>
[Content Security Policy for Webpack](https://medium.com/@minozhenko/content-security-policy-for-webpack-b4d1dd305feb)<br>
[VSCode ESLint, Prettier & Airbnb Style Guide Setup by Traversy Media](https://www.youtube.com/watch?v=SydnKbGc7W8) <br>
