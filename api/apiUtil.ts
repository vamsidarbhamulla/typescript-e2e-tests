/* eslint-disable @typescript-eslint/explicit-module-boundary-types,no-param-reassign */
import axios, { AxiosBasicCredentials, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const userEndpoint = '/api/users';
export const loginEndpoint = '/api/login';
export const registerEndpoint = '/api/register';

/* eslint-disable */
export async function getAllUsersApiRequest<T = any, R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(auth?: AxiosBasicCredentials | string) {
  const envConfig = getEnvironmentConfig();
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'GET',
    url: `${envConfig.baseUrl}${userEndpoint}`
  };
  _buildAuthFlow(axiosRequestConfig, auth);
  return executeAxios<T, R>(axiosRequestConfig);
}

/* eslint-disable */
export async function loginUserApiRequest<T = any, R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(data: T): Promise<R> {
  /* eslint-enable */
  return postApiRequest('/api/login', data);
}

/* eslint-disable */
export async function getApiRequest<R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(endpoint: string, auth?: AxiosBasicCredentials | string): Promise<R> {
  /* eslint-enable */
  const envConfig = getEnvironmentConfig();
  const url = endpoint.startsWith('/') ? `${envConfig.baseUrl}${endpoint}` : `${envConfig.baseUrl}/${endpoint}`;
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'GET',
    url
  };
  _buildAuthFlow(axiosRequestConfig, auth);
  return executeAxios(axiosRequestConfig);
}

/* eslint-disable */
export async function postApiRequest<T = any, R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(endpoint: string, data: T, auth?: AxiosBasicCredentials | string): Promise<R> {
  /* eslint-enable */
  const envConfig = getEnvironmentConfig();
  if (envConfig.env.isDebug) {
    // eslint-disable-next-line no-console
    console.log('data in postApiRequest', data);
  }
  const axiosRequestConfig: AxiosRequestConfig<T> = {
    method: 'POST',
    url: _buildUrl(endpoint, envConfig),
    data
  };

  _buildAuthFlow(axiosRequestConfig, auth);
  return executeAxios(axiosRequestConfig);
}

/* eslint-disable */
export async function putApiRequest<T = any, R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(endpoint: string, data: T, auth?: AxiosBasicCredentials | string): Promise<R> {
  /* eslint-enable */
  const envConfig = getEnvironmentConfig();
  if (envConfig.env.isDebug) {
    // eslint-disable-next-line no-console
    console.log('data in putApiRequest', data);
  }
  const axiosRequestConfig: AxiosRequestConfig<T> = {
    method: 'PUT',
    url: _buildUrl(endpoint, envConfig),
    data
  };

  _buildAuthFlow(axiosRequestConfig, auth);
  return executeAxios(axiosRequestConfig);
}

/* eslint-disable */
export async function patchApiRequest<T = any, R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(endpoint: string, data: T, auth?: AxiosBasicCredentials | string): Promise<R> {
  /* eslint-enable */
  const envConfig = getEnvironmentConfig();
  if (envConfig.env.isDebug) {
    // eslint-disable-next-line no-console
    console.log('data in patchApiRequest', data);
  }
  const axiosRequestConfig: AxiosRequestConfig<T> = {
    method: 'PATCH',
    url: _buildUrl(endpoint, envConfig),
    data
  };

  _buildAuthFlow(axiosRequestConfig, auth);
  return executeAxios(axiosRequestConfig);
}

/* eslint-disable */
export async function deleteApiRequest<R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(endpoint: string, auth?: AxiosBasicCredentials | string): Promise<R> {
  /* eslint-enable */
  const envConfig = getEnvironmentConfig();
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'DELETE',
    url: _buildUrl(endpoint, envConfig)
  };

  _buildAuthFlow(axiosRequestConfig, auth);
  return executeAxios(axiosRequestConfig);
}

/* eslint-disable */
export async function executeAxios<T = any, R = AxiosResponse<any> | AxiosError<any> | Error | unknown>(axiosRequestConfig: AxiosRequestConfig<T>): Promise<R> {
  /* eslint-enable */
  try {
    const envConfig = getEnvironmentConfig();
    const response = await axios({
      ...axiosRequestConfig,
      validateStatus: () => true
    });
    if (envConfig.env.isDebug) {
      // eslint-disable-next-line no-console
      console.log('response:', response.data);
    }
    return response as unknown as R;
  } catch (error: unknown | Error | AxiosError) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      return error as unknown as R;
    }
    return error as unknown as R;
  }
}

export function getEnvironmentConfig(): any {
  const testEnv = process.env.TEST_ENV || 'dev';
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
  const { environmentConfig } = require(`../config/${testEnv}`);
  return environmentConfig;
}

function _buildAuthFlow(axiosRequestConfig: AxiosRequestConfig, auth?: AxiosBasicCredentials | string) {
  if (auth && auth instanceof String) {
    // eslint-disable-next-line no-param-reassign
    axiosRequestConfig.headers = {
      Authorization: `Bearer ${auth}`
    };
  } else if (auth) {
    // eslint-disable-next-line no-param-reassign
    axiosRequestConfig.auth = auth as AxiosBasicCredentials;
  }
  return axiosRequestConfig;
}

function _buildUrl(endpoint: string, envConfig: any) {
  return endpoint.startsWith('/') ? `${envConfig.baseUrl}${endpoint}` : `${envConfig.baseUrl}/${endpoint}`;
}
