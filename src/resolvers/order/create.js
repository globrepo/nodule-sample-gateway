import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';

async function aggregate({ input: { customerId } }, req) {
    const { charmander } = getContainer('services');

    return charmander.order.create(req, {
        body: {
            customerId,
        },
    });
}


const resolver = createResolver({
    aggregate,
    mask: (obj, args, req) => [args, req],
});

bind('graphql.resolvers.order.create', () => resolver);
