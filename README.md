An example [synctos](https://github.com/Kashoo/synctos) project that demonstrates the basics of writing specifications/test cases using the built in testing utilities as originally referenced by the post [Testing your Sync Gateway functions with synctos](https://blog.couchbase.com/testing-sync-gateway-functions-synctos/) on the official Couchbase blog. Refer to the synctos [README](https://github.com/Kashoo/synctos/blob/master/README.md#testing), [test-fixture-maker](https://github.com/Kashoo/synctos/blob/master/src/testing/test-fixture-maker.js) module and [validation-error-formatter](https://github.com/Kashoo/synctos/blob/master/src/testing/validation-error-formatter.js) module for more information.

Instructions:

- Download project dependencies: `npm install`
- Validate document definitions and run test cases: `npm test`
- Generate the sync functions in the `build` directory: `npm run build`
- Clean up all build artifacts: `npm run clean`
