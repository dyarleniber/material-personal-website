<h1 align="center">
  Material-UI Personal website
</h1>

<p align="center">
  :computer: Personal website using JavaScript, React, Hooks, Material-UI, Jest and Enzyme.
</p>

<p align="center">
  <a href="https://github.com/dyarleniber/material-personal-website/actions?query=workflow%3ACI%2FCD">
    <img alt="CI/CD" src="https://github.com/dyarleniber/material-personal-website/workflows/CI/CD/badge.svg">
  </a>
  <a href="https://codecov.io/gh/dyarleniber/material-personal-website">
    <img alt="Coverage" src="https://img.shields.io/codecov/c/github/dyarleniber/material-personal-website">
  </a>
  <a href="https://github.com/dyarleniber/material-personal-website/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/dyarleniber/material-personal-website">
  </a>
</p>

<p align="center">
  <a href="https://dyarleniber.github.io/material-personal-website/">Live Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

Personal website buit with [React](https://reactjs.org) on [Material Design](https://material.io) through [Material-UI](https://material-ui.com) library.

The code base is 100% covered by automated tests with [Jest](https://jestjs.io) and [Enzyme](https://enzymejs.github.io/enzyme).

The website is hosted on [GitHub Pages](https://pages.github.com). And a CI/CD workflow created on [GitHub Actions](https://github.com/features/actions) is responsible for automatically test the source code, generate a coverage report and upload it on [Codecov](https://codecov.io), build and deploy the project on [GitHub Pages](https://pages.github.com). All these jobs are activated by a push or pull request event on master branch.

![preview-video](https://user-images.githubusercontent.com/40317398/84584841-23614900-ae01-11ea-8924-e8be306ac869.gif)

## :gear: Configuration

To clone and run this application, you’ll need to have [Git](https://git-scm.com) and [Node.js v10.16](https://nodejs.org) or higher installed on your computer.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dyarleniber/material-personal-website.git

# Go into the repository folder
$ cd material-personal-website

# Install dependencies
$ npm install

# Run the app in the development mode (open http://localhost:3000 to view it in the browser)
$ npm start
```

To run the tests (in the interactive watch mode), run the following command:

```bash
$ npm test
```

For more information about the available scripts, access the [Create React App documentation](https://create-react-app.dev/docs/available-scripts/).

> All data, such as personal data and portfolio, must be changed in the `src/config/dataApi.js` file.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/dyarleniber/material-personal-website/blob/master/LICENSE) for more information.

---

Made with ♥ by Dyarlen Iber :wave: [Get in touch!](https://dyarleniber.com)
