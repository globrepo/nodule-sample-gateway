import request from 'supertest';
import { Nodule } from '@globality/nodule-config';
import { signSymmetric } from '@globality/nodule-graphql';
import createApp from '../../../app';

let app;

const email = 'user@globality.com';
const token = signSymmetric({ email });


beforeEach(async () => {
    await Nodule.testing().fromObject({}).load();

    app = createApp();
});

it('should retrieve a single order', async () => {
    const query = `
        query {
          user {
            items {
                id
                email
            }
          }
        }
    `;

    const result = await request(app).post(
        '/gql/graphql',
    ).set(
        'Authorization', `Bearer ${token}`,
    ).send({
        query,
    });

    expect(result.body.errors).toBeUndefined();
    expect(result.body).toMatchSnapshot();
});
