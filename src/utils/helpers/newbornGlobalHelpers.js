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

export const sortByDate = episodes => {
  return episodes.sort((a, b) => {
    return new Date(a.created) - new Date(b.created);
  });
};

export const returnSortedEpisodes = info => {
  let episodes = [];
  console.log(info);
  if (info.models.items[0].episodes.items[0]) {
    episodes = info.models.items[0].episodes.items;
    return sortByDate(episodes);
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
