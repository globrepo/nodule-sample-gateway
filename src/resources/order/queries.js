import { getResolverPipeline } from '@globality/nodule-graphql';
import {
    GraphQLID,
} from 'graphql';


import { OrderListType } from './types';


export default {
    order: {
        type: OrderListType,
        args: {
            id: {
                type: GraphQLID,
            },
            customerId: {
                type: GraphQLID,
            },
        },
        resolve: getResolverPipeline(
            (obj, args) => {
                if (args.id) {
                    return [
                        'order.retrieve',
                        'toItemList',
                    ];
                }
                return [
                    'order.search',
                ];
            },
        ),
    },
};
