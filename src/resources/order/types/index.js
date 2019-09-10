import { getResolverPipeline } from '@globality/nodule-graphql';
import {
    GraphQLID,
} from 'graphql';


import { default as OrderType } from './OrderType';
import { default as OrderListType } from './OrderListType';

export const Order = {
    order: {
        type: OrderListType,
        args: {
            id: {
                type: GraphQLID,
            },
        },
        resolve: getResolverPipeline(
            (obj, args) => [
                'order.retrieve',
                'toItemList',
            ],
        ),
    },
};
