import { createResolver } from '@globality/nodule-graphql';
import { bind } from '@globality/nodule-config';


async function aggregate(req) {
    return {
        items: [{
            email: req.locals.jwt.Email,
        }],
    };
}

const resolver = createResolver({
    aggregate,
    mask: (obj, args, req) => [req],
});

bind('graphql.resolvers.user.retrieve', () => resolver);
