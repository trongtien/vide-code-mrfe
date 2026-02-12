### ALL CHANGES
* every time you make a change, YOU MUST lint, test, and build
* if any lint appears, fix it before proceeding.
* if any test appears broken, fix it before proceeding
* if the build doesn't work, fix it before proceeding
* keep running this until there is no lint, test, or build failures
* do not delete test to fix them, delete tests ONLY when a feature has been

### Initialize Project
* create .npmrc with the following:
```
stream=true
reportor=append-only
```


* create a folder called apps and a folder called packages
  * apps are for things we are going to deploy with zephyr (both hosts and mfes)
  * packages are fore shared logic and or configuration (such as tsconfig). they are plain old javascript 
* shared tsconfig for all packages and apps
  * The packages/editor-tsconfig package provides shared TypeScript configurations for the entire monorepo
  * packages/editor-tsconfig/base.json - base compilerOptions shared by all projects. set strictest setting
  * packages/editor-tsconfig/react.json - extends base.json, add "jsx": "react-jsx". Used by all React a apps
  * for consuming
    * Add "editor-tsconfig": "workspace:*" to the consumer's devDependencies
    * In the consumer's tsconfig.json:
```
{
    extends: editor-tsconfig/react.json,
    include: ["src"]
}
```
