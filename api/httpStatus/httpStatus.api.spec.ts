// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { LoginRequest, LoginResponse, User, UsersListResponse } from '@tests/shared/models';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { newUserData } from '@tests/shared/core';
import { deleteApiRequest, getAllUsersApiRequest, getApiRequest, loginUserApiRequest, postApiRequest, registerEndpoint, userEndpoint } from '../apiUtil';

describe('Verify HTTP Status', () => {
  describe('Verify 200 HTTP Status', async () => {
    it('should fetch all the available users with auth login token', async () => {
      const loginResponse = await loginUserApiRequest<LoginRequest, AxiosResponse<LoginResponse>>({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      });
      const allUsersPageResponse = await getAllUsersApiRequest<never, AxiosResponse<UsersListResponse>>(loginResponse.data.token);
      expect(allUsersPageResponse.status).to.be.eq(200);
    });
  });

  describe('Verify 201 HTTP Status', async () => {
    it('should create new user', async () => {
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
      expect(createUserResponse.status).to.be.eql(201);
    });
  });

  describe('Verify 204 HTTP Status', async () => {
    it('should delete an existing user using delete http method', async () => {
      const authCreds: AxiosBasicCredentials = {
        username: 'eve.holt@reqres.in',
        password: 'cityslicka'
      };
      const allUsersPageResponse = await getAllUsersApiRequest<never, AxiosResponse<UsersListResponse>>(authCreds);
      expect(allUsersPageResponse.status).to.be.eql(200);
      const allUsersList: Array<User> = allUsersPageResponse.data.data;
      const { id } = allUsersList[0];
      const deleteUserResponse = await deleteApiRequest<AxiosResponse<string>>(`${userEndpoint}/${id}`, authCreds);
      expect(deleteUserResponse.status).to.be.eql(204);
    });
  });

  describe('Verify 400 HTTP Status', async () => {
    it('should return 400 for an incomplete user json payload request', async () => {
      const authCreds: AxiosBasicCredentials = {
        username: 'eve.holt@reqres.in',
        password: 'cityslicka'
      };
      const { email } = newUserData();
      const postData: User = {
        email
      };
      const registerUserResponse = await postApiRequest<User, AxiosResponse<User>>(registerEndpoint, postData, authCreds);
      expect(registerUserResponse.status).to.be.eql(400);
    });
  });

  describe('Verify 404 HTTP Status', async () => {
    it('should return 404 for an unknown user endpoint', async () => {
      const authCreds: AxiosBasicCredentials = {
        username: 'eve.holt@reqres.in',
        password: 'cityslicka'
      };
      const id = 100;
      const deleteUserResponse = await getApiRequest<AxiosResponse<string>>(`${userEndpoint}/${id}`, authCreds);
      expect(deleteUserResponse.status).to.be.eql(404);
    });
  });
});
