import { GlobalWithFetchMock } from 'jest-fetch-mock';

require('jest-fetch-mock');

const nock = require('nock');

nock.disableNetConnect();
