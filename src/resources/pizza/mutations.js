import { getResolver } from '@globality/nodule-graphql';
import {
    PizzaCreateInputType,
    PizzaType,
} from './types';


export default {
    pizzaCreate: {
        type: PizzaType,
        description: 'pizza.create',
        args: {
            input: {
                type: PizzaCreateInputType,
            },
        },
        resolve: getResolver('pizza.create'),
    },
};
