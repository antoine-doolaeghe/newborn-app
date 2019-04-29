import { returnNewbornChartData } from "../newbornChartHelpers";

const MOCK_NEWBORN_SUMMARY_DATA = {
  episodes: {
    items: [
      {
        steps: {
          items: [
            {
              standardReward: 1,
              step: 1,
              created: "2019-04-28T17:41:17.680Z"
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
          data: [[1554057660000, 1]],
          backgroundColor: ["black"],
          label: "summary data"
        }
      ]
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
          data: [[1554057660000, 1]],
          backgroundColor: ["black"],
          label: "summary data"
        }
      ]
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
