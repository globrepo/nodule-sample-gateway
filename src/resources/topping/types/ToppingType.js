import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';


const ToppingType = new GraphQLObjectType({
    name: 'ToppingType',
    fields: {
        id: {
            type: GraphQLID,
        },
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

export default ToppingType;
