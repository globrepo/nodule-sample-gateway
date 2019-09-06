# nodule-sample-gateway

A sample gateway to showcase the `nodule-` libraries for making gateways in
`graphql`.

Much like the charismatic `pikachu` the gateway ties together the rest of your
team across frontend and backend.

# Prerequisites

1. Make sure you have `nvm` installed. On mac:

        brew install nvm

2. Identify the version of `Node.js` to use.

    You can find this version in `build.pikachu/docker-base/Dockerfile.deps`.
The version in this file represents the version we use in CircleCI and should be
representative of what version the service is intended to run with..

3. Install Yarn with `brew install yarn`.

4. Make sure you're using python2 for `pikachu`.

It's a little crazy but some of the node deps of our gateways actually depend on
python2 specifically. If you use `virtualenvwrapper` you can get python2 for
`pikachu` with:

        mkvirtualenv pikachu --python=python2.7


5. Install the project dependencies with `yarn instsall`.

## Structure

The code structure for `pikachu` aims to have small, consistent components that provide a unidirectional data flow:

 -  The `config` gets loaded first and used to initialize the `app`.
 -  The `routes` define HTTP entry points into the `app`. The `graphql` endpoint(s) live here.
 -  The `resources` define the GraphQL types used in the top-level graph `schema`
 -  The `resolvers` allow the `resources` to relate to each other within the graph `schema`.
 -  The `resolvers` use backend `services` to fetch and mutate resources.
 -  The `services` use a series of _wrappers_ to implement batching, caching, and deduplication.
# TBA
 -  The `clients` use OpenAPI (aka swagger) to communicate with the backends.


## Guidelines

When adding to `pikachu`:

 1. Write APIs with an eye towards what the *frontend needs* vs what the *backend providers*; `pikachu` is a translation layer!
 2. Resources should be named singularly and contain a list-valued property (called `items`) for pagination.
 3. Resolvers and services should use a consistent signature of `(req, args)` or `(req, { some, value })`.


## Commands

The following CLI commands are available, via yarn (e.g `yarn lint`):

* `lint`: Runs airbnb flavored eslint
* `local`: Runs a non-transpiled local server using babel
* `build`: Runs tests and transpiles ES6 -> ES5
* `start`: Runs tests, build and serves transpiled JS
* `test`: Runs tests
* `coverage`: Runs tests and outputs coverage report


## Running Locally

You will need to set a few environment variables for local development:

 -  Create your own local env file:

        cp .env.example .env
        # edit .env

 -  Source this configration:

        source .env

 -  Run the local server:

        yarn run local

 -  Connect to http://localhost:3002/gql/graphiql

### Service clients TBA

We use swagger definitions defined in a central place to autogenerate service
clients. Details TBA.
