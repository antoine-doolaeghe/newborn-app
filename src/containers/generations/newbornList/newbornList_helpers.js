import dayjs from "dayjs";
import { returnNewbornChartData } from "../../../utils/helpers/newbornChartHelpers";
import {
  returnSortedEpisodes,
  returnSortedSteps
} from "../../../utils/helpers/newbornGlobalHelpers";

import { colors } from "../../../theme/theme";

export const returnTooltipTitle = selectedNewborns => {
  if (selectedNewborns.length === 0)
    return "Select a newborn card to filter the partners";
  if (selectedNewborns.length === 1)
    return "Select a partner card to filter the childs";
  if (selectedNewborns.length === 2)
    return "Select a partner card to filter the childs";
  return "";
};

export const returnNewbornCardInfo = (
  info,
  currentUserId,
  selectedPartner,
  selectedChild
) => {
  const isOwnedByCurrentUser =
    info.owner && info.owner.id && info.owner.id === currentUserId;
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
    ? colors.primary
    : isChildSelected
    ? colors.secondary
    : colors.dark;
  const steps = returnSortedSteps(episodes, 0);
  const dayJsDob = dayjs(info.createdAt);
  const dob = `${dayJsDob.year()}-${dayJsDob.month()}-${dayJsDob.date()}`;
  const newbornInfo = {
    name: info.name || "",
    id: info.id || "",
    dob,
    color,
    bornPlace: info.bornPlace || "unknown region",
    isOwnedByCurrentUser,
    summaries: returnNewbornChartData(steps)
  };
  return newbornInfo;
};
