import {
    GraphQLID,
    GraphQLObjectType,
} from 'graphql';
import { getResolver, getResolverPipeline } from '@globality/nodule-graphql';

import PizzaListType from  '../../pizza/types';
import OrderEventListType from  '../../orderEvent/types';


const OrderType = new GraphQLObjectType({
    name: 'OrderType',
    fields: {
        id: {
            type: GraphQLID,
        },
        customerId: {
            type: GraphQLID,
        },
        pizzas: {
            type: PizzaListType,
            resolve: getResolver('pizza.search'),
        },
        events: {
            type: OrderEventListType,
            resolver: getResolver('orderEvent.search'),
        },
    },
});

export default OrderType;
