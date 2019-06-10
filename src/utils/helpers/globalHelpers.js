import dayjs from "dayjs";

export const returnUtcTime = time => {
  return Date.UTC(
    dayjs(time).year(),
    dayjs(time).month(),
    dayjs(time).day(),
    dayjs(time).hour(),
    dayjs(time).minute()
  );
};
