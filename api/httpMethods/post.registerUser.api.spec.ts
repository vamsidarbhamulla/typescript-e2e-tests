// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { flush, proxy } from '@alfonso-presa/soft-assert';
import { User } from '@tests/shared/models';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { newUserData } from '@tests/shared/core';
import { postApiRequest, registerEndpoint } from '../apiUtil';

const softExpect = proxy(expect);

describe('Verify HTTP POST register user api endpoint', async () => {
  it('should receive error message for unsuccessful registration', async () => {
    const authCreds: AxiosBasicCredentials = {
      username: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    const { email } = newUserData();
    const postData: User = {
      email
    };
    const registerUserResponse = await postApiRequest<User, AxiosResponse<User>>(registerEndpoint, postData, authCreds);
    softExpect(registerUserResponse.status).to.be.eql(400);
    softExpect(registerUserResponse.data).to.be.not.undefined;
    softExpect(registerUserResponse.data.error).to.be.not.undefined;
    softExpect(registerUserResponse.data.error).to.be.eql('Missing password');
    flush();
  });
});
