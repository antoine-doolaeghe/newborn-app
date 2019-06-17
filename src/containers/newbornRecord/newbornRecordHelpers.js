import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps
} from "../../utils/helpers/newbornGlobalHelpers";

export const returnNewbornRecordInfo = info => {
  const episodes = returnSortedEpisodes(info);
  const steps = returnSortedSteps(episodes, 0);
  const newbornInfo = {
    name: info.id || "",
    id: info.id || "",
    developmentStage: info.developmentStage || "",
    bornPlace: info.bornPlace || "unknown region",
    summaries: returnNewbornChartData(steps),
    currentStepMeanReward: steps[steps.length - 1].meanReward.toFixed(2),
    currentStep: steps[steps.length - 1].step,
    trainingStage: info.trainingStage || "",
    color: "black"
  };
  return newbornInfo;
};
