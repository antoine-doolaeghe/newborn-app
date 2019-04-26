import dayjs from "dayjs";

export const returnNewbornChartData = (newbornData, predictionData) => {
  let newbornSummarySteps = {};
  if (
    newbornData &&
    newbornData.models &&
    newbornData.models.items &&
    newbornData.models.items.length > 0 &&
    newbornData.models.items[0].episodes &&
    newbornData.models.items[0].episodes.items.length > 0 &&
    newbornData.models.items[0].episodes.items[0].steps
  ) {
    newbornSummarySteps =
      newbornData.models.items[0].episodes.items[0].steps.items;
  } else {
    return newbornSummarySteps;
  }
  const data = [];
  const labels = [];

  newbornSummarySteps.sort((a, b) => a.step - b.step);
  newbornSummarySteps.forEach(item => {
    if (item.standardReward) {
      const roundedValue = item.standardReward.toFixed(2);
      const val = [];
      val.push(
        Date.UTC(
          dayjs(item.created).year(),
          dayjs(item.created).month(),
          dayjs(item.created).day(),
          dayjs(item.created).hour(),
          dayjs(item.created).minute()
        )
      );
      val.push(parseFloat([roundedValue]));
      data.push(val);
      labels.push(item.step);
    }
  });

  const datasets = {
    labels,
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
