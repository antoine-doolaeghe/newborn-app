import { returnNewbornChartData } from "../../utils/helpers/newbornChartHelpers";

export const returnInstructionTitle = selectedNewborns => {
  if (selectedNewborns.length === 0)
    return "Select a newborn card to filter the partners";
  if (selectedNewborns.length === 1)
    return "Select a partner card to filter the childs";
  if (selectedNewborns.length === 2)
    return "Select a partner card to filter the childs";
};

export const isTooltipOpen = (selectedNewborns, isHovered) => {
  return selectedNewborns.length <= 1 && isHovered;
};

export const returnNewbornInfo = (
  newborn,
  selectedNewborns,
  hoveredNewborn,
  currentUserId
) => {
  const newbornInfo = {
    name: newborn.name || "",
    id: newborn.id || "",
    bornPlace: newborn.bornPlace || "unknown region",
    isSelected: selectedNewborns.includes(newborn.id),
    isHovered: hoveredNewborn === newborn.id,
    isOwnedByCurrentUser:
      newborn.owner && newborn.owner.id && newborn.owner.id === currentUserId,
    summaries: returnNewbornChartData(newborn)
  };
  return newbornInfo;
};
