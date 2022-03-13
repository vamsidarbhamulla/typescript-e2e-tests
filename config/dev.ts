// eslint-disable-next-line import/prefer-default-export
export const environmentConfig = {
  baseUrl: 'https://reqres.in',
  env: {
    testEnv: 'dev',
    isDebug: !!(process.env.IS_DEBUG && process.env.IS_DEBUG === 'true')
  }
};
