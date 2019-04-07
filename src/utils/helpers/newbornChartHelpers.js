export const returnNewbornChartData = newbornData => {
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
    data.push(item.meanReward);
    labels.push(item.step);
  });
  const min = Math.min(...data);
  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ["white"]
      }
    ],
    min
  };
};
