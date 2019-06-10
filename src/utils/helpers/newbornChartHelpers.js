import { returnUtcTime } from "./newbornGlobalHelpers";

export const returnNewbornChartData = (info, predictionData) => {
  const summarySteps = info.models.items[0].episodes.items[0].steps.items;
  const data = [];
  summarySteps.sort((a, b) => a.step - b.step);
  summarySteps.forEach(item => {
    if (item.standardReward) {
      const roundedValue = item.standardReward.toFixed(2);
      const values = [];
      values.push(returnUtcTime(item.created));
      values.push(parseFloat([roundedValue]));
      data.push(values);
    }
  });

  const datasets = {
    datasets: []
  };

  if (predictionData) {
    datasets.datasets.push({
      label: "prediction data",
      backgroundColor: ["red"],
      data: predictionData
    });
  }

  datasets.datasets.push({
    data,
    backgroundColor: ["black"],
    label: "summary data"
  });

  return datasets;
};
