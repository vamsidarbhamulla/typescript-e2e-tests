// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { flush, proxy } from '@alfonso-presa/soft-assert';
import { LoginRequest, LoginResponse, User, UsersListResponse } from '@tests/shared/models';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { getAllUsersApiRequest, loginUserApiRequest } from '../apiUtil';

const softExpect = proxy(expect);

describe('Verify HTTP GET using get all users api endpoint', async () => {
  it('should fetch all the available users with auth login token', async () => {
    const loginResponse = await loginUserApiRequest<LoginRequest, AxiosResponse<LoginResponse>>({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });
    const allUsersPageResponse = await getAllUsersApiRequest<never, AxiosResponse<UsersListResponse>>(loginResponse.data.token);
    verifyGetUsers(allUsersPageResponse);
  });
  it('should fetch all the available users with basic auth', async () => {
    const authCreds: AxiosBasicCredentials = {
      username: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    const allUsersPageResponse = await getAllUsersApiRequest<never, AxiosResponse<UsersListResponse>>(authCreds);
    verifyGetUsers(allUsersPageResponse);
  });
});

function verifyGetUsers(allUsersPageResponse: AxiosResponse<UsersListResponse>) {
  const allUsersList: Array<User> = allUsersPageResponse.data.data;
  softExpect(allUsersPageResponse.status).to.be.eql(200);
  softExpect(allUsersList.length).to.be.eql(6);
  softExpect(allUsersList[0]).to.be.eql({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });
  softExpect(allUsersList[1]).to.be.eql({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  });
  flush();
}
