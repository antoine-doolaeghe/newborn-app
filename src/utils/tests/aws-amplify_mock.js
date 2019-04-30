export const amplifyMock = data => {
  return {
    Auth: {
      currentAuthenticatedUser: () => {
        return new Promise(resolve => {
          resolve();
        });
      }
    },
    API: {
      graphql: () => {
        return new Promise(resolve => {
          resolve(data);
        });
      }
    },
    graphqlOperation: () => {}
  };
};

export default amplifyMock;
