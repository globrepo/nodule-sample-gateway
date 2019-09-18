import { getResolver } from '@globality/nodule-graphql';
import {
    ToppingCreateInputType,
    ToppingType,
} from './types';


export default {
    toppingCreate: {
        type: ToppingType,
        description: 'topping.create',
        args: {
            input: {
                type: ToppingCreateInputType,
            },
        },
        resolve: getResolver('topping.create'),
    },
};
