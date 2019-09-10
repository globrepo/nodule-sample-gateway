import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';


const OrderType = new GraphQLObjectType({
    name: 'OrderType',
    fields: {
        id: {
            type: GraphQLID,
        },
        customerId: {
            type: GraphQLID,
        },
    },
});

export default OrderType;
