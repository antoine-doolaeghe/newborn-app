import { returnUtcTime } from "./globalHelpers";

export const returnNewbornChartData = (info, predictionData) => {
  const summarySteps = info.models.items[0].episodes.items[0].steps.items;
  const dataset = [];
  summarySteps.sort((a, b) => a.step - b.step);
  summarySteps.forEach(item => {
    if (item.standardReward) {
      const roundedValue = item.standardReward.toFixed(2);
      const data = [];
      data.push(returnUtcTime(item.created));
      data.push(parseFloat([roundedValue]));
      dataset.push(data);
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
    dataset,
    backgroundColor: ["black"],
    label: "summary data"
  });

  return datasets;
};
