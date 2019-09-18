import { getContainer, setDefaults } from '@globality/nodule-config';
import '@globality/nodule-express';
import '@globality/nodule-logging';
import { bindServices } from '@globality/nodule-graphql';

// resolve graph dependencies
import './clients';
import './resolvers';
import './resources';
import './routers';
import './services';
import './transforms';

setDefaults('middleware.jwt', {
    realm: 'pikachu',
});
setDefaults('routes.graphiql', {
    endpointUrl: '/gql/graphql',
});

export default function createApp() {
    const {
        express,
        notFound,
    } = getContainer('routes');
    const {
        apiRouter,
        gqlRouter,
    } = getContainer('routers');

    bindServices();
    // enable routers
    express.use('/api', apiRouter);
    express.use('/gql', gqlRouter);
    express.all('/*', notFound);

    return express;
}
