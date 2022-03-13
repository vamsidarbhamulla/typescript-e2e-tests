// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { flush, proxy } from '@alfonso-presa/soft-assert';
import { LoginRequest, LoginResponse } from '@tests/shared/models';
import { AxiosResponse } from 'axios';
import { loginUserApiRequest } from '../apiUtil';

const softExpect = proxy(expect);

describe('Verify POST Login api endpoint', async () => {
  it('should fetch login token', async () => {
    const loginUser: LoginRequest = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    const loginResponse = await loginUserApiRequest<LoginRequest, AxiosResponse<LoginResponse>>(loginUser);
    softExpect(loginResponse.status).to.be.eql(200);
    softExpect(loginResponse.data.token).to.be.not.undefined;
    flush();
  });
});
