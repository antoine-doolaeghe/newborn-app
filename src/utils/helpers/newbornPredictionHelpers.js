export const returnNewbornPredictionData = newbornData => {
  const newbornSummarySteps = [];
  if (
    newbornData &&
    newbornData.models &&
    newbornData.models.items &&
    newbornData.models.items.length > 0 &&
    newbornData.models.items[0].episodes &&
    newbornData.models.items[0].episodes.items.length > 0 &&
    newbornData.models.items[0].episodes.items[0].steps
  ) {
    return newbornData.models.items[0].episodes.items[0].steps.items;
  }
  return newbornSummarySteps;
};
