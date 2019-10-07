import request from 'supertest';
import { Nodule } from '@globality/nodule-config';
import { mockResponse } from '@globality/nodule-openapi';
import createApp from '../../../app';

let app;


beforeEach(async () => {
    await Nodule.testing().fromObject(
        mockResponse('charmander', 'order.search', {
            count: 1,
            items: [
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    customerId: '00000000-0000-0000-0000-111111111111',
                },
            ],
        }),
    ).fromObject(
        mockResponse('charmander', 'pizza.search', {
            count: 2,
            items: [
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    size: 'REGULAR',
                },
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    size: 'LARGE',
                },
            ],
        }),
    ).fromObject(
        mockResponse('charmander', 'topping.search', {
            count: 2,
            items: [
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    toppingType: 'PEPPERONI',
                },
            ],
        }),
    ).load();

    app = createApp();
});


it('should retrieve a list of pizza for each order', async () => {
    const query = `
        query {
          order {
            items {
                id
                customerId
                pizzas {
                    items {
                        id
                        size
                        toppings {
                            items {
                                toppingType
                            }
                        }
                    }
                }
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
