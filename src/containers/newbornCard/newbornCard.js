import React from 'react';
import { NewbornCard } from './newbornCard.style';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import lineChartOptions from './lineChartOptions';

function NewBornCard(props) {
  const { newbornId } = props;
  return (
    <NewbornCard onClick={props.handleNewbornSelect} isSelected={props.isSelected}>
      <CardHeader data-newborn-id={newbornId} avatar={<Avatar aria-label="Recipe" />} title={props.newbornName} subheader={props.newbornPlace} />
      <Line
        options={lineChartOptions}
        data={props.newbornSummaries}
        data-newborn-id={newbornId}
        height={190}
      />
    </NewbornCard>
  );
}

export default NewBornCard;
