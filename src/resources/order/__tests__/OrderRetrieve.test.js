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
        mockResponse('charmander', 'order.retrieve', {
            id: '00000000-0000-0000-0000-000000000000',
            customerId: '00000000-0000-0000-0000-111111111111',
        }),
    ).load();

    app = createApp();
});

it('should retrieve a single order', async () => {
    const query = `
        query retrieveOrder($orderId: ID) {
          order(id: $orderId) {
            items {
                id
                customerId
            }
          }
        }
    `;

    const variables = {
        orderId: '00000000-0000-0000-0000-111111111111',
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
