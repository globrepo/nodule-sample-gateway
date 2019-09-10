import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';


async function aggregate( { id: orderId },  req) {
    const { charmander } = getContainer('services');

    if (!orderId) {
        return {};
    }

    return charmander.order.retrieve(req, {
        orderId,
    });
}

const resolver = createResolver({
    aggregate,
    mask: (obj, args, context, req) => [args, req],
});

bind('graphql.resolvers.order.retrieve', () => resolver);
