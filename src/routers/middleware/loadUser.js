import { bind } from '@globality/nodule-config';


export default function loadUser(req, res, next) {
    // Prefer services over clients. Service allows the function to utilize cache.
    req.locals.user = {
        id: '5fc8f7a7-a590-4e96-adb6-e8dab8303408',
        email: req.locals.jwt.Email || req.locals.jwt.email,
    };
    return next();
}


bind('middleware.loadUser', () => loadUser);
