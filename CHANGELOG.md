# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2021-03-31
### Fixed
- Replaced default use of `eval` for `devtool` in `webpack.config.js` because it was breaking `wrangler dev`
- Removed use of `this` in `src/index.ts` because it was breaking `wrangler dev`

### Security
- Updated npm dependencies for security fixes

## [0.1.0] - 2021-02-26
### Added
- Added ESLint and npm scripts to lint the codebase using Airbnb's standards (`npm run lint`, `npm run lint:fix`)
- Added a code coverage report and an npm script to produce it (`npm run test:coverage`)
- Integrated the code coverage with Code Climate
- Integrated the codebase with Travis CI
- Added npm scripts to deploy to all API environments (`npm run deploy:staging/uat/production`)
- Added this changelog
- Added a Pull Request checklist (`.github/pull_request_template`)
- Configured webpack for development and production (`webpack.config.js`, `webpack.production.js`)
- Added an ASDF version configuration (`.tools-versions`)
- Configured the editor configuration options

### Changed
- Replaced Mocha with Jest
- Configured `wrangler.toml` to work with all API environments

## Removed
- Removed the open-source licenses because this project is not meant to be public

[0.1.0]: https://github.com/mindfulchefuk/worker-template/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/mindfulchefuk/worker-template/compare/9a1574...v0.1.0
