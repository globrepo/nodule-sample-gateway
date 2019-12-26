import { bind, getContainer, setDefaults } from '@globality/nodule-config';
import bodyParser from 'body-parser';
import { Router } from 'express';

setDefaults('routers.gqlRouter.graphql', {
    /** Only use the graphql endpoint for GQL scheme introspection
     *
     * This will exclude all middleware used for the POST `/graphql` route
     * expect for the graphql middleware itself. Therefore all restrictions
     * are removed when accessing the the graphql endpoint.
     *
     * This is only intended for local and CI/CD purpose. Do not use this for
     * anything else.
     */
    introspectionOnly: false,
});


setDefaults('routes.graphql.apolloEngine', {
    sendVariableValues: {
        transform: variables => variables,
    },

    sendHeaders: {
        onlyNames: [
            'user-agent',
            'X-Request-Id',
            'X-Request-User',
        ],
    },
});


bind('routers.apiRouter', () => {
    const { health } = getContainer('routes');
    const router = new Router();

    router.get('/health', health);
    return router;
});

bind('routers.gqlRouter', () => {
    const { graphql, graphiql, health } = getContainer('routes');
    const { logging } = getContainer('middleware');
    const { config } = getContainer();

    const router = new Router();

    router.get('/health', health);

    const parseJson = bodyParser.json();

    if (config.routers.gqlRouter.graphql.introspectionOnly) {
        router.post(
            '/graphql',
            [graphql],
        );
    } else {
        router.post(
            '/graphql',
            [
                logging,
                parseJson,
                graphql,
            ],
        );
    }

    if (graphiql) {
        router.get(
            '/graphiql',
            logging,
            parseJson,
            graphiql,
        );
    }

    return router;
});
