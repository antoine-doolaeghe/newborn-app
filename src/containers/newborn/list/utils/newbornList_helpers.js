import { returnNewbornChartData } from "../../../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps,
  returnFormattedTime
} from "../../../../utils/helpers/newbornGlobalHelpers";

import { Theme } from "../../../../theme/theme";

export const returnTooltipTitle = selectedNewborns => {
  if (selectedNewborns.length === 0)
    return "Select a newborn card to filter the partners";
  if (selectedNewborns.length === 1)
    return "Select a partner card to filter the childs";
  if (selectedNewborns.length === 2)
    return "Select a partner card to filter the childs";
  return "";
};

export const returnNewbornCardInfo = (info, selectedPartner, selectedChild) => {
  const episodes = info.models
    ? returnSortedEpisodes(info.models.items[0])
    : null;

  const isPartnerSelected =
    selectedPartner === info.id ||
    (info.partners && info.partners.includes(selectedPartner));

  const isChildSelected =
    selectedChild === info.id ||
    (info.partners && info.partners.includes(selectedChild));

  const color = isPartnerSelected
    ? Theme.palette.primary
    : isChildSelected
    ? Theme.palette.secondary
    : Theme.palette.light;

  const steps = returnSortedSteps(episodes, 0);
  const dob = returnFormattedTime(info.birthDate);

  const newbornInfo = {
    title: info.id.substring(info.id.length - 3, info.id.length),
    id: info.id || "",
    dob,
    color,
    childs: info.childs ? info.childs.length : 0,
    partners: info.partners ? info.partners.length : 0,
    bornPlace: info.bornPlace || "unknown region",
    summaries: returnNewbornChartData(steps)
  };
  return newbornInfo;
};
