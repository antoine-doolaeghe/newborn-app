import dayjs from "dayjs";

export const returnUtcTime = time => {
  return Date.UTC(
    dayjs(time).year(),
    dayjs(time).month(),
    dayjs(time).date(),
    dayjs(time).hour(),
    dayjs(time).minute(),
    dayjs(time).second()
  );
};

export const returnFormattedTime = time => {
  return dayjs(time).format("YYYY/MM/DD");
};

export const sortByDate = episodes => {
  return episodes.sort((a, b) => {
    return new Date(a.created) - new Date(b.created);
  });
};

export const returnSortedEpisodes = model => {
  const episodes = [];
  if (model && model.episodes && model.episodes.items[0]) {
    return sortByDate(model.episodes.items);
  }
  return episodes;
};

export const returnSortedSteps = (episodes, key) => {
  const steps = [];
  if (episodes[key] && episodes[key].steps) {
    return sortByDate(episodes[0].steps.items);
  }
  return steps;
};

export const returnTextAbstract = (text, length) => {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
};
