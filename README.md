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

### To add or delete content go to:

src/content/content.ts file and modify content object according src/domain/types.ts

### To add/edit image from url:
 - Just add url string to image content object just like that:

```bash
 const content = {
  ...
    {
      image: 'https://domain.com/photo.jpg',
      title: 'Iterators',
      ...
    },
 };
```
### To add/edit image from local files:

- Add optimized image to src/assets/images after that add image import to src/assets/images/images.ts and add image to IMAGES object

```bash
import NewImage from '@images/newImage.png';
...

export const IMAGES = {
  ...
  newImage: NewImage,
};
 ```
- Add image to content file

```bash
 const content = {
  ...
    {
      image: IMAGES.newImage,
      ...
    },
 };
```

### To add svg icon:

- Add optimized svg to src/assets/svg folder

Important!!! In astro project you can't use svg with <use xlink:href= .....> 

- Add svg name to content.meetupGroups object as string

```bash
 const content = {
  ...
     meetupGroups: [
      {
        icon: 'newSvg',
        title: 'Wroclaw Scala User Group',
        ...
      },
      ...
    ]
 };
```

Remember to check if image or icon display correctly, svg / image shouldn't have margin.



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── icons
│   │       └── icon.svg
│   │       ├── ...
│   │   └── images
│   │       ├── image.png
│   │       ├── ...
│   │       └── images.tsx
│   ├── components/
│   │   ├── Component
│   │       └── Component.astro
│   │   ├── ReactComponent
│   │       ├── Component.module.scss
│   │       └── index.tsx
│   │   └── ...

│   └── content/
│       └── content.ts
│   └── domain/
│       ├── types.ts
│       └── constants.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│   └── styles/
│       ├── common-colors.scss
│       ├── common-responsive.scss
│       ├── ...
│       └── common-style.scss
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

