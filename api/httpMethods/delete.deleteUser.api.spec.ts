// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { flush, proxy } from '@alfonso-presa/soft-assert';
import { User, UsersListResponse } from '@tests/shared/models';
import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { deleteApiRequest, getAllUsersApiRequest, userEndpoint } from '../apiUtil';

const softExpect = proxy(expect);

describe('Verify HTTP DELETE method by using delete user api endpoint', async () => {
  it('should delete an existing user using delete http method', async () => {
    const authCreds: AxiosBasicCredentials = {
      username: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    const allUsersPageResponse = await getAllUsersApiRequest<never, AxiosResponse<UsersListResponse>>(authCreds);
    softExpect(allUsersPageResponse).to.be.not.undefined;
    const allUsersList: Array<User> = allUsersPageResponse.data.data;
    const { id } = allUsersList[0];
    const deleteUserResponse = await deleteApiRequest<AxiosResponse<string>>(`${userEndpoint}/${id}`, authCreds);
    softExpect(deleteUserResponse.status).to.be.eql(204);
    softExpect(deleteUserResponse.data).to.be.eql('');
    flush();
  });
});
