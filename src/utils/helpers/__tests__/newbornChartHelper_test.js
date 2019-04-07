import { returnNewbornChartData } from "../newbornChartHelpers";

describe("returnNewbornChartData", () => {
  it("should return the chart data if the newborn contains some summary steps", () => {
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
    const expectedObject = {
      labels: [1],
      datasets: [
        {
          data: [1],
          backgroundColor: ["white"]
        }
      ],
      min: 1
    };

    expect(returnNewbornChartData(MOCK_NEWBORN_SUMMARY_DATA)).toEqual(
      expectedObject
    );
  });
  it("should return the chart data if the newborn contains some summary steps", () => {
    const MOCK_NEWBORN_SUMMARY_DATA = {
      models: {
        items: []
      }
    };
    const expectedObject = {};

    expect(returnNewbornChartData(MOCK_NEWBORN_SUMMARY_DATA)).toEqual(
      expectedObject
    );
  });
});
