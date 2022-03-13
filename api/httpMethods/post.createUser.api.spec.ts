// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { flush, proxy } from '@alfonso-presa/soft-assert';
import { User } from '@tests/shared/models';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { newUserData } from '@tests/shared/core';
import { postApiRequest, userEndpoint } from '../apiUtil';

const softExpect = proxy(expect);

describe('Verify HTTP POST create user api endpoint', async () => {
  it('should fetch token for successful login', async () => {
    const authCreds: AxiosBasicCredentials = {
      username: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    const { name } = newUserData();
    const job = 'leader';
    const postData: User = {
      name,
      job
    };
    const createUserResponse = await postApiRequest<User, AxiosResponse<User>>(userEndpoint, postData, authCreds);
    softExpect(createUserResponse.status).to.be.eql(201);
    softExpect(createUserResponse.data).to.be.not.undefined;
    softExpect(createUserResponse.data.id).to.be.not.undefined;
    softExpect(createUserResponse.data.createdAt).to.be.not.undefined;
    softExpect(createUserResponse.data.name).to.be.eql(name);
    softExpect(createUserResponse.data.job).to.be.eql(job);
    const today = `${new Date().toISOString()}`.split('T')[0];
    softExpect(createUserResponse.data.createdAt).to.contains(today);
    flush();
  });
});
