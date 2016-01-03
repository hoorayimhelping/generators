# Quartet's Yeoman Generators

We use [yeoman](http://yeoman.io/) to quickly scaffold repetitive boilerplate code that is common among all our apps. Yeoman lets us automate away writing the same code over and over again.

`npm install -g yo`

## Installing A Generator

Each directory in this project is essentially an uncompressed npm package. To make a source directory act like an npm package, change to directory of the generator your want to use and tell npm to create a global symlink to that package:

```bash
git clone git@github.com:quartethealth/generators.git
cd generators

cd generator-bff
npm link
```
This is analogous to running `npm install -g generator-bff`

## Scaffolding a BFF

Now that we've installed the bff generator, let's run it to build a web app. Create a directory of the name of the app you want, then run the generator:

```bash
mkdir bh-bff
cd bh-bff
yo bff [--skip-install]
```
Follow the on-screen instructions to name generate the bff. The generator creates a number of files, including a `package.json` file with some pre-filled dependencies and a basic directory structure and sets up an express server to handle requests to /.
