import { getResolver } from '@globality/nodule-graphql';
import {
    OrderCreateInputType,
    OrderType,
} from './types';


export default {
    orderCreate: {
        type: OrderType,
        description: 'order.create',
        args: {
            input: {
                type: OrderCreateInputType,
            },
        },
        resolve: getResolver('order.create'),
    },
};
