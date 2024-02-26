## Scala Poland Site
 
## Description 🖋


## Getting started

Clone the repo:

```bash
git clone https://github.com/scala-poland/scala-poland-site-new.git
```
 ⚠️ ensure that you use 20.10.0 Node version

and run sequentially:

```bash
cd evoeco-cms # go to the project's directory
npm i # install all required dependencies
npm run dev  # run local server at `http://localhost:4321/`
```

to allow format astro files on save:

- add [Astro vs code extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- ensure you have [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- go to VS Code settings.json file and add:

```bash
{
    ...
 "editor.formatOnSave": true,
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
     },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "astro",
    "typescript",
    "typescriptreact"
  ]
  }
```

## Adding content

To add or delete content go to:

scr/content/content.ts file and modify content object



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Component
│   │       ├── Component.module.scss
│   │       └── Component.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│   └── styles/
│       ├── common-style.scss
│       └── theme.scss
├── ...
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

