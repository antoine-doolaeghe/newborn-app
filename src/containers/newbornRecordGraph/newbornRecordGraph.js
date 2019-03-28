import PropTypes from 'prop-types';
import React from 'react';

import { Line } from 'react-chartjs-2';

const NewBornRecordGraph = props => {
  const { newbornGenerations } = props;

  const datasets = [];
  let labels = [];

  if (!newbornGenerations) {
    return <div />;
  }

  newbornGenerations.forEach(generation => {
    if (generation && generation.episodes && generation.episodes.items) {
      generation.episodes.items.forEach(item => {
        datasets.push({ data: item.steps.items.map(episode => episode.meanReward) });
        datasets.push({ data: item.steps.items.map(episode => episode.standardReward) });
        labels = item.steps.items.map(episode => episode.step.toString());
      });
    }
  });

  return (
    <Line
      data={{
        datasets,
        labels,
      }}
    />
  );
};

NewBornRecordGraph.propTypes = {
  newbornGenerations: PropTypes.array.isRequired,
};

export default NewBornRecordGraph;
