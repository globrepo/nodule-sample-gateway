import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { bind } from '@globality/nodule-config';

import { Order } from './order/types';

console.log("order ", Order);


const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Top-level entry points',
    fields: {
        ...Order,
    },
});

const MutationType = new GraphQLObjectType({
    name: 'Mutations',
    description: 'These are the things we can change',
    fields: {
    },
});

bind('graphql.QueryType', () => QueryType);
bind('graphql.MutationType', () => MutationType);
bind('graphql.schema', ({ QueryType, MutationType }) => new GraphQLSchema({
    query: QueryType,
//    mutation: MutationType, mutation type can't be empty, readd when we have
//    mutations!
}));
