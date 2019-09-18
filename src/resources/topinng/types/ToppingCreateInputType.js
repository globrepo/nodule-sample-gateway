import {
    GraphQLID,
    GraphQLInputObjectType,
} from 'graphql';


const ToppingCreateInputType = new GraphQLInputObjectType({
    name: 'ToppingCreateInputType',
    description: 'Topping create input',
    fields: {
        pizzaId: {
            type: GraphQLID,
        },
        orderId: {
            type: GraphQLID,
        },
        toppingType: {
            type: GraphQLString,
        },
    },
});

export default ToppingCreateInputType;
