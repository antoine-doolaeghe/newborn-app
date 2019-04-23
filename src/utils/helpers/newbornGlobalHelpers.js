import { returnNewbornChartData } from "./newbornChartHelpers";

export const returnNewbornInfo = (
  newborn,
  selectedNewborns,
  hoveredNewborn,
  currentUserId
) => {
  const isOwnedByCurrentUser =
    newborn.owner && newborn.owner.id && newborn.owner.id === currentUserId;
  const isSelected = selectedNewborns.includes(newborn.id);
  const newbornInfo = {
    name: newborn.name || "",
    id: newborn.id || "",
    bornPlace: newborn.bornPlace || "unknown region",
    isSelected,
    isHovered: hoveredNewborn === newborn.id,
    isOwnedByCurrentUser,
    color: isOwnedByCurrentUser ? "red" : isSelected ? "green" : "black",
    summaries: returnNewbornChartData(newborn)
  };
  return newbornInfo;
};
