import {
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';

import PizzaType from './PizzaType';

const PizzaListType = new GraphQLObjectType({
    name: 'PizzaListType',
    fields: {
        items: {
            type: GraphQLList(PizzaType),
        },
    },
});

export default PizzaListType;
