import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { bind } from '@globality/nodule-config';

import OrderMutations from './order/mutations';
import Order from './order/queries';
import User from './user/queries';
import OrderEventMutations from './orderEvent/mutations';


const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Top-level entry points',
    fields: {
        ...Order,
        ...User,
    },
});

const MutationType = new GraphQLObjectType({
    name: 'Mutations',
    description: 'These are the things we can change',
    fields: {
        ...OrderMutations,
        ...OrderEventMutations,
    },
});

bind('graphql.QueryType', () => QueryType);
bind('graphql.MutationType', () => MutationType);
bind('graphql.schema', () => new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
}));
