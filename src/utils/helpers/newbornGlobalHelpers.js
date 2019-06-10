import dayjs from "dayjs";
import { returnNewbornChartData } from "./newbornChartHelpers";

export const returnUtcTime = time => {
  return Date.UTC(
    dayjs(time).year(),
    dayjs(time).month(),
    dayjs(time).date(),
    dayjs(time).hour(),
    dayjs(time).minute()
  );
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
  const newbornInfo = {
    name: info.name || "",
    id: info.id || "",
    bornPlace: info.bornPlace || "unknown region",
    isSelected,
    isHovered: hoveredNewborn === info.id,
    isOwnedByCurrentUser,
    color: isOwnedByCurrentUser ? "red" : isSelected ? "green" : "black",
    summaries: returnNewbornChartData(info)
  };
  return newbornInfo;
};

export const returnNewbornRecordInfo = info => {
  const newbornInfo = {
    name: info.name || "",
    id: info.id || "",
    bornPlace: info.bornPlace || "unknown region",
    summaries: returnNewbornChartData(info),
    color: "black"
  };
  return newbornInfo;
};
