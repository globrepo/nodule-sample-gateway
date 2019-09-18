import {
    GraphQLFloat,
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';


const OrderEventType = new GraphQLObjectType({
    name: 'OrderEventType',
    fields: {
        id: {
            type: GraphQLID,
        },
        eventType: {
            type: GraphQLString,
        },
        customerId: {
            type: GraphQLID,
        },
        orderId: {
            type: GraphQLID,
        },
        pizzaSize: {
            type: GraphQLString,
        },
        crustType: {
            type: GraphQLString,
        },
        toppingType: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLFloat,
        },
        clock: {
            type: GraphQLInt,
        },
    },
});

export default OrderEventType;
