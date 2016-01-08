# Git Hooks Generator

Installs all of our git hooks into .git/hooks.

## Installing A Generator

To make a source directory act like an npm package, change to directory of the generator your want to use and tell npm to create a global symlink to that package:

```bash
cd githooks
npm link
```
This is analogous to running `npm install -g githooks`

## Scaffolding
This is meant to be dropped into an application or composed as part of an app's initial scaffolding.
