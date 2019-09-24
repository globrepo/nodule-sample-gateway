import {
    GraphQLFloat,
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import { getResolver, getResolverPipeline } from '@globality/nodule-graphql';

import ToppingListType from '../../topping/types';


const PizzaType = new GraphQLObjectType({
    name: 'PizzaType',
    fields: {
        id: {
            type: GraphQLID,
        },
        customerId: {
            type: GraphQLID,
        },
        size: {
            type: GraphQLString,
        },
        crustType: {
            type: GraphQLString,
        },
        toppings: {
            type: ToppingListType,
            resolve: getResolver('topping.search'),
        },
    },
});

export default PizzaType;
