import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';


function mask(obj, args, context, req) {
    if (obj) {
        return [{ orderId: obj.id }, req];
    } else {
        return [args, req];
    }
}

async function aggregate({ customerId, orderId }, req) {
    const { charmander } = getContainer('services');

    return charmander.orderEvent.search(req, {
        customerId,
        orderId,
    });
}

const resolver = createResolver({
    aggregate,
    mask,
});

bind('graphql.resolvers.order.search', () => resolver);
