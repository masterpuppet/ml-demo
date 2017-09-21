## Mercado Libre Demo

###
Requirements: Node v7.8.0

### Steps
- `yarn`
- `yarn serve`

to view the demo navigate to `http://localhost:3001`
to exec the app as development environment run `yarn start`
to exec the app as production run `yarn serve`

- SSR is enabled, Demo app will work even if javascript is disabled
- I have added some degree of mobile support and also replaced px with rem units

### Tests
to exec tests run`yarn test`
to view code coverage exec `yarn test -- --coverage`

Note: Coverage is just to get the idea, i haven't implemented 100% of it
### Storybook
to view the Storybook execute `yarn storybook` and then navigate to `http://localhost:9001`

### Cache
Cache is enabled for /api requests, to view the cache exec `node_modules/.bin/express-redis-cache size --host redis-14898.c11.us-east-1-3.ec2.cloud.redislabs.com --port 14898`

You can delete tokens from cache with `node_modules/.bin/express-redis-cache del /js* --host redis-14898.c11.us-east-1-3.ec2.cloud.redislabs.com --port 14898`

Notes:
- You may notice some warnings on the console about react/style-prop-object,
  this is a known issue with some components using the `style` as prop, in this case is FormattedNumber from `react-intl`
  and not my implementation
- Demo is missing Swagger for the Api and Docker to isolate the Demo from the infrastructure, due to times constraints, i haven't had the time to implement those feature.
