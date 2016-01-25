# Yeoman Generators

I use [yeoman](http://yeoman.io/) to quickly scaffold repetitive boilerplate.

`npm install -g yo`

## Installing A Generator

Each directory in this project is essentially an uncompressed npm package. To make a source directory act like an npm package, change to directory of the generator you want to use and tell npm to create a global symlink to that package:

```bash
git clone git@github.com:hoorayimhelping/generators.git
cd generators

cd generator-bff
npm link
```
This is analogous to running `npm install -g generator-bff generator-test generator-config`

## Scaffolding a BFF

Now that we've installed the bff generator, let's run it to build a web app. Create a directory of the name of the app you want, then run the generator:

```bash
mkdir ~/Development/bh-bff
cd ~/Development/bh-bff
yo bff [--skip-install]
```
Follow the on-screen instructions to generate the bff. The generator creates a number of files, including a `package.json` file with some pre-filled dependencies and a basic directory structure and sets up an express server, including running `npm install` to handle requests to / at localhost on the port you specify.

