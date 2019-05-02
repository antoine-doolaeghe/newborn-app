## Newborn-app

This repository holds the application for the newborn-app.

### Install

```
$ npm || yarn install
```

### Start & watch

```
$ npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Code Quality Control

### Prettier

For code formatting we use `Prettier`: https://prettier.io/

For VS Code editor you can install Prettier plugin, code will then be automatically formatted on saving a file: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

The prettier config is in `.prettierrc` and `.prettierignore`. When changing the config you might want to recursively reapply the rules to all files; to do this run these two commands:

```
npx prettier --write "*.js"
npx prettier --write "src/**/*.js"
```

### ESLint

For code linting we use `ESLint`: https://eslint.org/

For VS Code editor you can install ESLint plugin: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

The config is in `.eslintrc.js`. When changing the config you might want to recursively apply fixes to all files; to do this run these two commands:

```
npx eslint src --fix
```

### Tests

```
npm || yarn test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
