export const returnNewbornRecordInfo = info => {
  let newbornInfo = {};
  if (info) {
    newbornInfo = {
      name: info.name || "",
      id: info.id || "",
      developmentStage: info.developmentStage || "",
      bornPlace: info.bornPlace || "unknown region",
      model: info.models.items[0],
      currentStepMeanReward: info.liveMeanReward || "--",
      currentStep: info.currentStep || "--",
      trainingStage: info.trainingStage || "--",
      color: "black"
    };
  }
  return newbornInfo;
};
