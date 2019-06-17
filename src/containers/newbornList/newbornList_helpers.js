import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps
} from "../../utils/helpers/newbornGlobalHelpers";

export const returnTooltipTitle = selectedNewborns => {
  if (selectedNewborns.length === 0)
    return "Select a newborn card to filter the partners";
  if (selectedNewborns.length === 1)
    return "Select a partner card to filter the childs";
  if (selectedNewborns.length === 2)
    return "Select a partner card to filter the childs";
  return "";
};

export const isTooltipOpen = (selectedNewborns, isHovered) => {
  return selectedNewborns.length <= 1 && isHovered;
};

export const returnNewbornCardInfo = (
  info,
  selectedNewborns,
  hoveredNewborn,
  currentUserId
) => {
  const isOwnedByCurrentUser =
    info.owner && info.owner.id && info.owner.id === currentUserId;
  const isSelected = selectedNewborns.includes(info.id);
  const episodes = returnSortedEpisodes(info);
  const steps = returnSortedSteps(episodes, 0);
  const newbornInfo = {
    name: info.name || "",
    id: info.id || "",
    bornPlace: info.bornPlace || "unknown region",
    isSelected,
    isHovered: hoveredNewborn === info.id,
    isOwnedByCurrentUser,
    color: isOwnedByCurrentUser ? "red" : isSelected ? "green" : "black",
    summaries: returnNewbornChartData(steps)
  };
  return newbornInfo;
};
