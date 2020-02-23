# react-step-by-step-boilerplate

This repository is documenting the steps followed to set-up a react application from scratch, so you can follow along and make your own <br>
A necessary exercise for newbies to coding <br>

This React application boilerplate uses:

- Webpack
- Babel
- Eslint
- Prettier
- Husky

More details in [package.json](https://github.com/elena-in-code/web-app/blob/master/package.json)

## Clone this boilerplate and start your app

You can get this boiler plate and start working on your react app <br>
but I will recommend to [work on your own for practice](https://github.com/elena-in-code/web-app#create-your-boilerplate-from-scratch).

Steps:

- Clone repo --> Navigate to the folder you want to start your new app and run this command in your console: <br>
  `git clone git@github.com:elena-in-code/web-app.git`
- Install dependencies --> will install all modules listed as dependencies in package.json: <br>
  `npm i`
- Run application --> run this command in your console: <br>
  `npm run start`

## Create your boilerplate from scratch

In the sections I listed the steps I followed

### Initialize node project

`npm init`

### React

`npm install --save react react-dom`

#### Files required for a React App to work

- index.html in root dir
- index.js in root dir
- .\src\containers\App.js

### Webpack

`npm install --save webpack webpack-dev-server`<br>
`npm install --save-dev webpack-cli` or `npm i -D webpack-cli`

#### Webpack configuration

[webpack.config.js file](https://github.com/elena-in-code/web-app/blob/master/webpack.config.js)<br>
This file you have to create in your working directory.

- **entry** define a entry point
- **output** where to output bundle.js
- **devServer** options for dev server
- **module** determine how different types of modules inside project will be treated <br>
  **module.rules** An array of Rules which are matched to requests when modules are created. These rules can modify how the module is created. They can apply loaders to the module, or modify the parser. <br>
  .js or .jsx files use babel-loader to transpile all

### Babel

`npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev` or `npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react`

#### Babel configuration

[.babelrc file](https://github.com/elena-in-code/web-app/blob/master/.babelrc)<br>
This file you have to create in your working directory.

### ESLint

`npm install eslint --save-dev` or `npm i -D eslint`

#### ESLint configuration

`npx eslint --init`

[.eslintrc file](https://github.com/elena-in-code/web-app/blob/master/.eslintrc.json) <br>
This file will be created for you when you run the command above, after a series of questions in the console. Answers can be changed afterwards in the same file.

- `npm install eslint-plugin-prettier`: Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- `npm install eslint-config-prettier`: Turns off all rules that are unnecessary or might conflict with Prettier.
- `npx install-peerdeps --dev eslint-config-airbnb`: This package provides Airbnb's .eslintrc as an extensible shared config.

### Prettier

`npm install prettier --save-dev` or `npm i -D prettier`

#### Prettier configuration

[.prettierrc file](https://github.com/elena-in-code/web-app/blob/master/.prettierrc)<br>
This file you have to create in your working directory.

### Husky

`npm install husky --save-dev` or `npm i -D husky`

#### Husky configuration

We are adding hooks with husky (hooks are custom scripts) that will run with the git event we are defining in the husky section in the package.json.<br>
In our case `pre-commit`<br>

We are using lint-staged <br>
`npm install --save-dev lint-staged` <br>
Auto-correcting issues prior to commit

## Issues faced

CSP - Content Security Policy

Fix by using 2 plugins:

- csp-webpack-plugin
- html-webpack-plugin

## Resources

### Documentation

[webpack](https://webpack.js.org/configuration/) <br>
[ESLint](https://eslint.org/docs/user-guide/getting-started) <br>
[React](https://github.com/facebook/react) <br>
[Husky](https://github.com/typicode/husky) <br>
[Prettier](https://prettier.io/) <br>
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) <br>
[npm-install](https://docs.npmjs.com/cli/install) <br>
[lint-staged](https://github.com/okonet/lint-staged) <br>
[Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) <br>

### Reads

[How to set up & deploy your React app from scratch using Webpack and Babel](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/) <br>
[Setting up a React project from scratch](https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97)<br>
[How to set up a React project from scratch](https://dev.to/kris/how-to-set-up-a-react-project-from-scratch-4ob)<br>
[Content Security Policy for Webpack](https://medium.com/@minozhenko/content-security-policy-for-webpack-b4d1dd305feb)<br>
[VSCode ESLint, Prettier & Airbnb Style Guide Setup by Traversy Media](https://www.youtube.com/watch?v=SydnKbGc7W8) <br>
[Build a Modern JS Project - #3 ESLint, Prettier & EditorConfig](https://www.youtube.com/watch?v=O4ZIJgOWj_A) <br>
[Easy git hooks with Husky](https://www.vojtechruzicka.com/githooks-husky/) <br>

If you liked this, please give it a star ⭐ at the top of the page, Thank you!
