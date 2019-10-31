import { getResolver } from '@globality/nodule-graphql';


import { UserListType } from './types';


export default {
    user: {
        type: UserListType,
        resolve: getResolver('user.retrieve'),
    },
};
