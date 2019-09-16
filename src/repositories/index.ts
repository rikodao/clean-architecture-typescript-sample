const usingMockDb = (process.env.USE_MOCK_DB || '').toLowerCase();
let userRipositoryPath = './User/UserRipository';

if (usingMockDb === 'true') {
    userRipositoryPath += '.mock';
}

// tslint:disable:no-var-requires
export const { UserRipository } = require(userRipositoryPath);

