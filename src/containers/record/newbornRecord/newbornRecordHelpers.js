export const returnNewbornRecordInfo = info => {
  let newbornInfo = {};
  if (info) {
    const currentMeanReward = info.models
      ? info.models.items[0].episodes.items[0].steps.items[1].meanReward
      : null;
    const previousMeanReward = info.models
      ? info.models.items[0].episodes.items[0].steps.items[0].meanReward
      : null;
    const currentIndex = currentMeanReward - previousMeanReward;

    newbornInfo = {
      name: info.name || "",
      id: info.id || "",
      developmentStage: info.developmentStage || "",
      bornPlace: info.bornPlace || "unknown region",
      modelId: info.models ? info.models.items[0].id : "",
      currentMeanReward: currentMeanReward || "--",
      currentIndex: currentIndex || "--",
      currentStep: info.currentStep || "--",
      trainingStage: info.trainingStage || "--",
      ownerUserName: info.owner ? info.owner.userName : "",
      parents: info.parents ? info.parents : [],
      childs: info.childs ? info.childs : []
    };
  }
  return newbornInfo;
};
