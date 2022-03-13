// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { flush, proxy } from '@alfonso-presa/soft-assert';
import { User, UsersListResponse } from '@tests/shared/models';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { getAllUsersApiRequest, putApiRequest, userEndpoint } from '../apiUtil';

const softExpect = proxy(expect);

describe('Verify HTTP PUT method by updating update user api endpoint', async () => {
  it('should update an existing user using put http method', async () => {
    const authCreds: AxiosBasicCredentials = {
      username: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    const allUsersPageResponse = await getAllUsersApiRequest<never, AxiosResponse<UsersListResponse>>(authCreds);
    const allUsersList: Array<User> = allUsersPageResponse.data.data;
    const { name, job: oldJob } = allUsersList[0];
    const newJob = 'software developer';
    const putData: User = {
      name,
      job: newJob
    };
    /* eslint-disable */
    const updateUserResponse = await putApiRequest<User, AxiosResponse<User>>(userEndpoint, putData, authCreds);
    /* eslint-enable */
    softExpect(updateUserResponse.status).to.be.eql(200);
    softExpect(updateUserResponse.data).to.be.not.undefined;
    softExpect(updateUserResponse.data.updatedAt).to.be.not.undefined;
    softExpect(updateUserResponse.data.name).to.be.eql(name);
    softExpect(updateUserResponse.data.job).to.be.not.eql(oldJob);
    softExpect(updateUserResponse.data.job).to.be.eql(newJob);
    const today = `${new Date().toISOString()}`.split('T')[0];
    softExpect(updateUserResponse.data.updatedAt).to.contains(today);
    flush();
  });
});
