import { bind, getContainer } from '@globality/nodule-config';
import bodyParser from 'body-parser';
import { Router } from 'express';

// load middleware bound to nodule
import './middleware';


bind('routers.apiRouter', () => {
    const { health } = getContainer('routes');
    const router = new Router();

    router.get('/health', health);
    return router;
});

bind('routers.gqlRouter', () => {
    const { graphql, graphiql, health } = getContainer('routes');
    const { jwt, passBasicAuth, logging, loadUser } = getContainer('middleware');

    const router = new Router();

    router.get('/health', health);

    const parseJson = bodyParser.json();

    router.use(
        '/graphql',
        logging,
        jwt,
        loadUser,
        parseJson,
        graphql,
    );

    if (graphiql) {
        router.use(
            '/graphiql',
            logging,
            passBasicAuth,
            jwt,
            loadUser,
            parseJson,
            graphiql,
        );
    }

    return router;
});
