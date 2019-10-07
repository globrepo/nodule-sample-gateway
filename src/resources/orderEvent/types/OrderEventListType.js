import {
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';

import OrderEventType from './OrderEventType';

const OrderEventListType = new GraphQLObjectType({
    name: 'OrderEventListType',
    fields: {
        items: {
            type: GraphQLList(OrderEventType),
        },
    },
});

export default OrderEventListType;
