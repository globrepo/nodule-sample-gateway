import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';


async function aggregate({ customerId }, req) {
    const { charmander } = getContainer('services');

    return charmander.order.search(req, {
        customerId,
    });
}

const resolver = createResolver({
    aggregate,
    mask: (obj, args, context, req) => [args, req],
});

bind('graphql.resolvers.order.search', () => resolver);
