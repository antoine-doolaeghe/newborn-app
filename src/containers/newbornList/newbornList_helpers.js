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
