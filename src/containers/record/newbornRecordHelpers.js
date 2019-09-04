export const returnNewbornRecordInfo = info => {
  const { steps } = info.models.items[0].episodes.items[0].steps;
  const currentMeanReward = steps ? steps.items[1].meanReward : null;
  const previousMeanReward = steps.items[0] ? steps.items[0].meanReward : null;
  const currentEntropy = steps.items[1] ? steps.items[1].entropy : null;
  const currentValueLoss = steps.items[1] ? steps.items[1].valueLoss : null;
  const currentStep = steps.items[1] ? steps.items[1].step : null;
  const currentIndex = currentMeanReward - previousMeanReward;

  return {
    name: info.name || "",
    id: info.id || "",
    developmentStage: info.developmentStage || "",
    bornPlace: info.bornPlace || "unknown region",
    birthDate: info.birthDate || "--",
    modelId: info.models ? info.models.items[0].id : "",
    currentMeanReward: currentMeanReward || "--",
    currentEntropy: currentEntropy || "--",
    currentIndex: currentIndex || "--",
    currentValueLoss: currentValueLoss || "--",
    currentStep: currentStep || "--",
    trainingStage: info.trainingStage || "--",
    ownerUserName: info.owner ? info.owner.userName : "",
    ownerProfileImage: info.owner ? info.owner.profileImage : "",
    parents: info.parents ? info.parents : [],
    partners: info.partners ? info.partners : [],
    childs: info.childs ? info.childs : []
  };
};
