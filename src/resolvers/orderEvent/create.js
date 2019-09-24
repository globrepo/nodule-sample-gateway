import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';

async function aggregate({ input: { 
    eventType,
    customerId,
    orderId,
    pizzaSize,
    crustType,
    toppingType,
 } }, req) {
    const { charmander } = getContainer('services');

    return charmander.orderEvent.create(req, {
        body: {
            eventType,
            customerId,
            orderId,
            pizzaSize,
            crustType,
            toppingType,
        },
    });
}


const resolver = createResolver({
    aggregate,
    mask: (obj, args, req) => [args, req],
});

bind('graphql.resolvers.orderEvent.create', () => resolver);
