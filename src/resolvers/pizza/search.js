import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';


// XXX contrast defining special logic in the mask vs
// getResolverPipeline: https://github.com/globality-corp/nodule-graphql/blob/f59605a0f14ea6be3882c1c398466092b1ad285a/src/resolvers/pipeline.js#L112
function mask(obj, args, context, req) {
    if (obj) {
        return [{ orderId: obj.id }, req];
    } else {
        return [args, req];
    }
}

async function aggregate({ customerId, orderId }, req) {
    const { charmander } = getContainer('services');

    return charmander.pizza.search(req, {
        customerId,
        orderId,
    });
}

const resolver = createResolver({
    aggregate,
    mask,
});

bind('graphql.resolvers.pizza.search', () => resolver);
