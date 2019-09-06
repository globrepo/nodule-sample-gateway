import { bind, getContainer } from '@globality/nodule-config';
import bodyParser from 'body-parser';
import { Router } from 'express';


bind('routers.apiRouter', () => {
    const { health } = getContainer('routes');
    const router = new Router();

    router.get('/health', health);
    return router;
});

bind('routers.gqlRouter', () => {
    const { graphql, graphiql, health } = getContainer('routes');
    const { logging } = getContainer('middleware');

    const router = new Router();

    router.get('/health', health);

    const parseJson = bodyParser.json();

    router.use(
        '/graphql',
        logging,
        parseJson,
        graphql,
    );

    if (graphiql) {
        router.use(
            '/graphiql',
            logging,
            parseJson,
            graphiql,
        );
    }

    return router;
});
