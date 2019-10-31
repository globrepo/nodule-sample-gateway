import request from 'supertest';
import { Nodule } from '@globality/nodule-config';
import { signSymmetric } from '@globality/nodule-graphql';
import { mockResponse } from '@globality/nodule-openapi';
import createApp from '../../../app';

let app;

const email = 'user@globality.com';
const token = signSymmetric({ email });

beforeEach(async () => {
    await Nodule.testing().fromObject(
        mockResponse('charmander', 'orderEvent.create', {
            id: '00000000-0000-0000-0000-000000000000',
            customerId: '00000000-0000-0000-0000-111111111111',
            eventType: 'PizzaCreated',
            orderId: '00000000-0000-0000-0000-222222222222',
            pizzaSize: 'REGULAR',
            crustType: 'REGULAR',
            toppingType: null,
        }),
    ).load();

    app = createApp();
});

it('should create an order event', async () => {
    const query = `
        mutation createOrderEvent($input: OrderEventCreateInputType) {
          orderEventCreate(input: $input) {
            id
            eventType
          }
        }
    `;

    const variables = {
        input: {
            customerId: '00000000-0000-0000-0000-111111111111',
            eventType: 'PizzaCreated',
            orderId: '00000000-0000-0000-0000-222222222222',
            pizzaSize: 'REGULAR',
            crustType: 'REGULAR',
        },
    };


    const result = await request(app).post(
        '/gql/graphql',
    ).set(
        'Authorization', `Bearer ${token}`,
    ).send({
        query,
        variables,
    });

    expect(result.body.errors).toBeUndefined();
    expect(result.body).toMatchSnapshot();
});
