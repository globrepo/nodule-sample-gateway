import { getResolver } from '@globality/nodule-graphql';
import {
    OrderEventCreateInputType,
    OrderEventType,
} from './types';


export default {
    orderEventCreate: {
        type: OrderEventType,
        description: 'orderEvent.create',
        args: {
            input: {
                type: OrderEventCreateInputType,
            },
        },
        resolve: getResolver('orderEvent.create'),
    },
};
