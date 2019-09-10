import request from 'supertest';
import { Nodule } from '@globality/nodule-config';
import { mockResponse } from '@globality/nodule-openapi';
import createApp from '../../../app';

let app;


beforeEach(async () => {
    await Nodule.testing().fromObject(
        mockResponse('charmander', 'order.search', {
            count: 2,
            items: [
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    customerId: '00000000-0000-0000-0000-111111111111',
                },
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    customerId: '00000000-0000-0000-0000-111111111112',
                },
            ],
        }),
    ).load();

    app = createApp();
});


it('should retrieve a list of orders', async () => {
    const query = `
        query {
          order {
            items {
                id
                customerId
            }
          }
        }
    `;

    const result = await request(app).post(
        '/gql/graphql',
    ).send({
        query,
    });

    expect(result.body.errors).toBeUndefined();
    expect(result.body).toMatchSnapshot();
});


it('should retrieve all orders for customer id', async () => {
    const query = `
        query($customerId: ID) {
          order(customerId: $customerId) {
            items {
                id
                customerId
            }
          }
        }
    `;

    const variables = {
        customerId: '00000000-0000-0000-0000-111111111111',
    };

    const result = await request(app).post(
        '/gql/graphql',
    ).send({
        query,
        variables,
    });

    expect(result.body.errors).toBeUndefined();
    expect(result.body).toMatchSnapshot();
});
