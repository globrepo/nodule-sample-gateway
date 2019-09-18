import {
    GraphQLID,
    GraphQLInputObjectType,
} from 'graphql';


const OrderCreateInputType = new GraphQLInputObjectType({
    name: 'OrderCreateInputType',
    description: 'Order create input',
    fields: {
        customerId: {
            type: GraphQLID,
        },
    },
});

export default OrderCreateInputType;
