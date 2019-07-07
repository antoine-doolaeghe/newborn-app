import { returnNewbornChartData } from "../../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps
} from "../../../utils/helpers/newbornGlobalHelpers";

export const returnTooltipTitle = selectedNewborns => {
  if (selectedNewborns.length === 0)
    return "Select a newborn card to filter the partners";
  if (selectedNewborns.length === 1)
    return "Select a partner card to filter the childs";
  if (selectedNewborns.length === 2)
    return "Select a partner card to filter the childs";
  return "";
};

export const returnNewbornCardInfo = (info, currentUserId) => {
  const isOwnedByCurrentUser =
    info.owner && info.owner.id && info.owner.id === currentUserId;
  const episodes = info.models
    ? returnSortedEpisodes(info.models.items[0])
    : null;
  const steps = returnSortedSteps(episodes, 0);
  const newbornInfo = {
    name: info.name || "",
    id: info.id || "",
    bornPlace: info.bornPlace || "unknown region",
    isOwnedByCurrentUser,
    summaries: returnNewbornChartData(steps)
  };
  return newbornInfo;
};
