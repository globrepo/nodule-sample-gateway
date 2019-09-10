import { bind } from '@globality/nodule-config';

bind('graphql.transforms.toItemList', () => item => ({ items: item ? [item] : [] }));
