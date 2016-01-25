# BFF Generator

[Backend For Frontend](https://www.thoughtworks.com/radar/techniques/bff-backend-for-frontends)

## Installing A Generator

Yeoman works on npm packages. Until we get our packages out to npm, we can temporarily symlink local npm packages globally to npm. To do that from the generators directory:

```bash
git clone git@github.com:hoorayimhelping/generators.git
cd generators
for directory in ./*/; do (cd "$directory" && npm link); done
```
This is analogous to running `npm install -g generator-bff`

## Scaffolding a BFF

```bash
mkdir bh-bff
cd bh-bff
yo bff [--skip-install]
```
