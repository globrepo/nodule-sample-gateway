import { bind } from '@globality/nodule-config';

import batch from './batching/config';

bind('serviceConfig', () => ({ batch }));
