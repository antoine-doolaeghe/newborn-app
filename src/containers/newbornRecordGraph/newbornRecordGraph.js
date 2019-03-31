import PropTypes from 'prop-types';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NewBornRecordGraphContainer } from './newbornRecordGraph.style';
import lineChartOptions from './lineChartOptions';


import { Line } from 'react-chartjs-2';

const NewbornRecordGraph = props => {
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
    <NewBornRecordGraphContainer>
      {true ? //props.newbornInfoLoading ? 
        <CircularProgress /> 
        :
        <Line
          options={lineChartOptions}
          height={280}
          data={{
            datasets,
            labels,
          }}/>
        }
    </NewBornRecordGraphContainer>
  );
};

NewbornRecordGraph.propTypes = {
  newbornGenerations: PropTypes.array.isRequired,
};

export default NewbornRecordGraph;
