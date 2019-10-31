import { createResolver } from '@globality/nodule-graphql';
import { bind } from '@globality/nodule-config';


async function aggregate(req) {
    return {
        items: [{
            id: req.locals.user.id,
            email: req.locals.user.email,
        }],
    };
}

const resolver = createResolver({
    aggregate,
    mask: (obj, args, req) => [req],
});

bind('graphql.resolvers.user.retrieve', () => resolver);
