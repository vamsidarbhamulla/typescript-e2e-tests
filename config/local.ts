// eslint-disable-next-line import/prefer-default-export
export const environmentConfig = {
  // baseUrl: 'http://localhost:3000',
  env: {
    testEnv: 'local',
    isDebug: process.env.IS_DEBUG ? process.env.IS_DEBUG : false
  }
};
