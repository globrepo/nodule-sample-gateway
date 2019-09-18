import {
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';

import OrderType from './OrderType';

const OrderListType = new GraphQLObjectType({
    name: 'OrderListType',
    fields: {
        items: {
            type: GraphQLList(OrderType),
        },
    },
});

export default OrderListType;
