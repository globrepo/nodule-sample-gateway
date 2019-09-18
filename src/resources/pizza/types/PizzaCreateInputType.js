import {
    GraphQLID,
    GraphQLInputObjectType,
} from 'graphql';


const PizzaCreateInputType = new GraphQLInputObjectType({
    name: 'PizzaCreateInputType',
    description: 'Pizza create input',
    fields: {
        customerId: {
            type: GraphQLID,
        },
        orderId: {
            type: GraphQLID,
        },
        size: {
            type: GraphQLString,
        },
        crustType: {
            type: GraphQLString,
        },
    },
});

export default PizzaCreateInputType;
