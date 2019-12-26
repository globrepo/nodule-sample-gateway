import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';


// XXX contrast defining special logic in the mask vs
// getResolverPipeline: https://github.com/globality-corp/nodule-graphql/blob/f59605a0f14ea6be3882c1c398466092b1ad285a/src/resolvers/pipeline.js#L112
function mask(obj, args, context, req) {
    if (obj) {
        return [{ pizzaId: obj.id }, req];
    }

    return [args, req];
}

async function aggregate({ pizzaId }, req) {
    const { charmander } = getContainer('services');

    return charmander.topping.search(req, {
        pizzaId,
    });
}

const resolver = createResolver({
    aggregate,
    mask,
});

bind('graphql.resolvers.topping.search', () => resolver);
