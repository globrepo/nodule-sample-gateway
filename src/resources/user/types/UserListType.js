import {
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';

import UserType from './UserType';

const UserListType = new GraphQLObjectType({
    name: 'UserListType',
    fields: {
        items: {
            type: GraphQLList(UserType),
        },
    },
});

export default UserListType;
