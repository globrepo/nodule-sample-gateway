import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLString,
} from 'graphql';


const OrderEventCreateInputType = new GraphQLInputObjectType({
    name: 'OrderEventCreateInputType',
    description: 'Order event create input',
    fields: {
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
    },
});

export default OrderEventCreateInputType;
