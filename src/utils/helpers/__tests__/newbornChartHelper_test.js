import { returnNewbornChartData } from "../newbornChartHelpers";

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

const MOCK_PREDICTION_DATA = [1, 2, 3, 4, 5];

describe("returnNewbornChartData", () => {
  it("should return the chart data if the newborn contains some summary steps", () => {
    const expectedObject = {
      labels: [1],
      datasets: [
        {
          data: [1],
          backgroundColor: ["white"],
          label: "summary data"
        }
      ],
      min: 1
    };

    expect(returnNewbornChartData(MOCK_NEWBORN_SUMMARY_DATA)).toEqual(
      expectedObject
    );
  });

  it("should return the chart and prediction if the newborn has some prediction", () => {
    const expectedObject = {
      labels: [1],
      datasets: [
        {
          data: [1, 2, 3, 4, 5],
          backgroundColor: ["red"],
          label: "prediction data"
        },
        {
          data: [1],
          backgroundColor: ["white"],
          label: "summary data"
        }
      ],
      min: 1
    };
    expect(
      returnNewbornChartData(MOCK_NEWBORN_SUMMARY_DATA, MOCK_PREDICTION_DATA)
    ).toEqual(expectedObject);
  });

  it("should return an empty chart data if the newborn doesn't contain summary steps", () => {
    const MOCK_EMPTY_NEWBORN_SUMMARY_DATA = {
      models: {
        items: []
      }
    };
    const expectedObject = {};

    expect(returnNewbornChartData(MOCK_EMPTY_NEWBORN_SUMMARY_DATA)).toEqual(
      expectedObject
    );
  });
});
