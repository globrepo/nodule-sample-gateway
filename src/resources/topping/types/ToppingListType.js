import {
    GraphQLList,
    GraphQLObjectType,
} from 'graphql';

import ToppingType from './ToppingType';

const ToppingListType = new GraphQLObjectType({
    name: 'ToppingListType',
    fields: {
        items: {
            type: GraphQLList(ToppingType),
        },
    },
});

export default ToppingListType;
