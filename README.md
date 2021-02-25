# Cloudflare Worker Template

A batteries included template for kick starting a TypeScript Cloudflare Worker project.

## Getting Started

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). If you are not already
familiar with the tool, we recommend that you install the tool and configure it to work with your
[Cloudflare account](https://dash.cloudflare.com). Documentation can be found
[here](https://developers.cloudflare.com/workers/tooling/wrangler/).

To generate using Wrangler, run this command:

```bash
wrangler generate my-ts-project https://github.com/mindfulchefuk/worker-template
```

### Configuring `wrangler.toml`

You must configure `wrangler.toml` to be able to preview and deploy the worker in Cloudflare:

- Fill in the `account_id` and `zone_id`. You can find them in our Cloudflare dashboard.
- Replace `changeme-dev`, `changeme-staging`, `changeme-uat` and `changeme-production` to the name of your worker.
- Set the route `route` for each environment. Be very careful when doing this.

## Developing

[`src/index.js`](./src/index.ts) calls the request handler in [`src/handler.ts`](./src/handler.ts), and will return
the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

## Testing

This template comes with mocha tests which simply test that the request handler can handle each request method.
`npm test` will run your tests. Run `npm run test:coverage` to see the code coverage after the test suite finished.

## Formatting and Linting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `npm run format`. It also
uses ESLint to lint the project. To invoke, run ` npm run lint` and `npm run lint:fix` to lint and fix linting errors.

## Previewing and Publishing

For information on how to preview and publish your worker, please see the
[Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish)

There are npm scripts to facilitate this process `npm run deploy:staging`, `npm run deploy:uat` and
`npm run deploy:production` which deploy the worker to staging, uat and production, respectively.

## Caveats

The `service-worker-mock` used by the tests is not a perfect representation of the Cloudflare Workers runtime.
It is a general approximation. We recommend that you test end to end with `wrangler dev` in addition to a
[staging environment](https://developers.cloudflare.com/workers/tooling/wrangler/configuration/environments/) to test
things before deploying.
