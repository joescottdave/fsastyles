# FSA front-end styles npm package

This is an npm package for FSA Pattern Library. The CSS development is done in [PostCSS](https://postcss.org/).

## Installing

To include the styles in your project run:

```
npm install fsastyles --save
```

This will place the styles inside your node_modules and will add the package to you package.json.

## Usage

In order to use the styles, they need to be compiled using postCSS and a set of plugins. The styles.css in the root directory of this project contains all @import needed to replicate the styles present on food.gov.uk. However, it is possible to include only the required components. As a minimum most components will require the import of helper.css and custom-property.css from the helper directory.

## Styles for new services

This package contains latest styles used on [food.gov.uk](https://www.food.gov.uk). Any updates to the core styles will be reflected here. 
If you are working on a new service, please create a branch from dev to create new styles for your service. Once they are signed-off, they will be merged to form a part of the package.
