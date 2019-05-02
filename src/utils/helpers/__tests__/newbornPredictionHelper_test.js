import { returnNewbornPredictionData } from "../newbornPredictionHelpers";

describe("returnPredictionData", () => {
  it("should return the prediction data if the newborn contains some summary steps", () => {
    const MOCK_NEWBORN_SUMMARY_DATA = {
      models: {
        items: [
          {
            episodes: {
              items: [
                {
                  steps: {
                    items: [
                      {
                        meanReward: 1,
                        step: 1
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    };
    const expectedObject = [
      {
        meanReward: 1,
        step: 1
      }
    ];

    expect(returnNewbornPredictionData(MOCK_NEWBORN_SUMMARY_DATA)).toEqual(
      expectedObject
    );
  });
  it("should return the chart data if the newborn contains some summary steps", () => {
    const MOCK_NEWBORN_SUMMARY_DATA = {
      models: {
        items: []
      }
    };
    const expectedObject = [];

    expect(returnNewbornPredictionData(MOCK_NEWBORN_SUMMARY_DATA)).toEqual(
      expectedObject
    );
  });
});
