import { returnUtcTime, sortByDate } from "./globalHelpers";

export const returnSortedEpisodes = info => {
  let episodes = [];

  if (info.models.items[0].episodes.items[0]) {
    episodes = info.models.items[0].episodes.items;
    return sortByDate(episodes);
  }

  return episodes;
};

export const returnSortedSteps = (episodes, key) => {
  const steps = [];
  if (episodes[key] && episodes[key].steps) {
    return sortByDate(episodes[0].steps.items);
  }
  return steps;
};

export const returnNewbornChartData = (steps, predictionData) => {
  const data = [];
  steps.forEach(item => {
    if (item.meanReward) {
      const roundedValue = item.meanReward.toFixed(2);
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
