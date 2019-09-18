import {
    GraphQLID,
    GraphQLInputObjectType,
} from 'graphql';


const OrderCreateInputType = new GraphQLInputObjectType({
    name: 'OrderCreateInputType',
    description: 'Order create input',
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

export default OrderCreateInputType;
