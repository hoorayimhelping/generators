# Config Generator
Install our common configs like `.gitignore`, `.eslintrc` and '.editorconfig'

## Installing A Generator

To make a source directory act like an npm package, change to directory of the generator your want to use and tell npm to create a global symlink to that package:

```bash
cd generator-config
npm link
```
This is analogous to running `npm install -g generator-config`

## Scaffolding
This is meant to be dropped into an application or composed as part of an app's initial scaffolding. Given an app structure:

```
my-app/
├── log
└── src
    ├── js
    └── server.js
```

Running:

```bash
cd my-app
yo config [--skip-install]
```

Will yield

```
my-app/
├── .eslintrc
├── .gitignore
├── log
├── src
│   ├── js
│   └── server.js
└── util
```
