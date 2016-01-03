# BFF Generator

## Installing A Generator

To make a source directory act like an npm package, change to directory of the generator your want to use and tell npm to create a global symlink to that package:

```bash
cd generator-bff
npm link
```
This is analogous to running `npm install -g generator-bff`

## Scaffolding a BFF

```bash
mkdir bh-bff
cd bh-bff
yo bff [--skip-install]
```
Based on lessons learned and code written for [Halp.](https://github.com/quartethealth/halp)
