import { getContainer, setDefaults } from '@globality/nodule-config';
import '@globality/nodule-express';
import '@globality/nodule-logging';

// resolve graph dependencies
import './clients';
import './resolvers';
import './resources';
import './routers';
import './services';

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

    // XXX this relies on internal libraries for instantiating service clients
    // from swagger specs, which we will defer until later.
    // bindServices();
    // enable routers
    express.use('/api', apiRouter);
    express.use('/gql', gqlRouter);
    express.all('/*', notFound);

    return express;
}
