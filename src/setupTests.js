import React from "react";

jest.mock("highcharts-react-official", () => {
  return () => <div />;
});

jest.mock("@tensorflow/tfjs", () => {
  return { HighchartsReact: "felo" };
});

// jest.mock("aws-amplify", () => {
//   return {
//     Auth: {
//       currentAuthenticatedUser: () => {
//         return new Promise(resolve => {
//           resolve();
//         });
//       }
//     },
//     API: {
//       graphql: query => {
//         return new Promise(resolve => {
//           resolve({
//             data: {
//               listGenerations: { items: [{}] },
//               getGeneration: { newborns: { items: [{}, {}] } }
//             }
//           });
//         });
//       }
//     },
//     graphqlOperation: () => {}
//   };
// });

jest.mock("aws-amplify-react", () => {
  return {
    withAuthenticator: component => {
      return component;
    }
  };
});
