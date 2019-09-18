import {
    GraphQLFloat,
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';


const PizzaType = new GraphQLObjectType({
    name: 'PizzaType',
    fields: {
        id: {
            type: GraphQLID,
        },
        customerId: {
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

export default PizzaType;
