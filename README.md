# Antwerp UI - React components

React Components using Core Branding 6.3.0.
Npm repo: https://www.npmjs.com/package/@a-ui/react.

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Local setup

- Node version 18, v. `18.14.2` at time of writing.
- `npm i -g yarn`
- `yarn install` (installs node_modules for global project and for storybook)
- Run example app: `yarn run playground` (and go to `localhost:4200`) vs
- Run storybook: `yarn run storybook`

## Code generation

Create a new component:

- `yarn generate` or `yarn g`

## Testing

Jest and react test library

- `yarn test`
- `yarn test --watch`
- `yarn test --coverage`

## Deployment / Publishing

### Components

- (Optional) `npm adduser`
- `yarn build` to build the components
- `cd dist/a-ui/react && yarn publish`
- `git tag v<VERSION>`
- `git push origin --tags`

### Storybook

- Build storybook: `yarn run storybook:build`
- Static build can be found in `documentation/storybook/storybook-static`
- (There is a github workflow that builds and deploys Storybook on Github pages) `.github/workflows/deploy-storybook.yml`
- URL: https://a-ui.github.io/core_components_react/

## NX

Default NX project: `@a-ui/react`.

Commands:

- `yarn nx migrate latest` - Update to the latest Nx version

## Contributions

See [CONTRIBUTING.md](CONTRIBUTING.md).
