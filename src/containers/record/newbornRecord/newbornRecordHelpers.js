export const returnNewbornRecordInfo = info => {
  let newbornInfo = {};
  if (info) {
    const currentMeanReward = info.models
      ? info.models.items[0].episodes.items[0].steps.items[1].meanReward
      : null;
    const previousMeanReward = info.models
      ? info.models.items[0].episodes.items[0].steps.items[0].meanReward
      : null;
    const currentEntropy = info.models
      ? info.models.items[0].episodes.items[0].steps.items[1].entropy
      : null;
    const currentValueLoss = info.models
      ? info.models.items[0].episodes.items[0].steps.items[1].valueLoss
      : null;
    const currentStep = info.models
      ? info.models.items[0].episodes.items[0].steps.items[1].step
      : null;
    const currentIndex = currentMeanReward - previousMeanReward;

    newbornInfo = {
      name: info.name || "",
      id: info.id || "",
      developmentStage: info.developmentStage || "",
      bornPlace: info.bornPlace || "unknown region",
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
  }
  return newbornInfo;
};
