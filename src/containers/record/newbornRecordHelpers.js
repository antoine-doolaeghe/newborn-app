export const returnNewbornRecordInfo = info => {
  const { items } = info.models.items[0].episodes.items[0].steps;
  let previousMeanReward = "--";
  let meanReward = "--";
  let entropy = "--";
  let valueLoss = "--";
  let step = "--";
  let currentIndex = "--";

  if (items[0]) {
    previousMeanReward = items[0].meanReward;
  }

  if (items[1]) {
    ({ meanReward } = items[1]);
    ({ entropy } = items[1]);
    ({ valueLoss } = items[1]);
    ({ step } = items[1]);
  }

  currentIndex = meanReward - previousMeanReward;

  return {
    name: info.name || "",
    id: info.id || "",
    developmentStage: info.developmentStage || "",
    bornPlace: info.bornPlace || "unknown region",
    birthDate: info.birthDate || "--",
    modelId: info.models ? info.models.items[0].id : "",
    meanReward,
    entropy,
    currentIndex,
    valueLoss,
    step,
    trainingStage: info.trainingStage || "--",
    ownerUserName: info.owner ? info.owner.userName : "",
    ownerProfileImage: info.owner ? info.owner.profileImage : "",
    parents: info.parents ? info.parents : [],
    partners: info.partners ? info.partners : [],
    childs: info.childs ? info.childs : []
  };
};
