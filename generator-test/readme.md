# Test Generator

Installs a ready-to-go mocha test set up and drops it into `./test` in the current directory.

## Installing A Generator

To make a source directory act like an npm package, change to directory of the generator your want to use and tell npm to create a global symlink to that package:

```bash
cd generator-test
npm link
```
This is analogous to running `npm install -g generator-test`

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
yo test [--skip-install]
```

Will yield

```
my-app/
├── log
├── src
│   ├── js
│   └── server.js
└── test
    ├── environment.js
    └── mocha.opts
```
