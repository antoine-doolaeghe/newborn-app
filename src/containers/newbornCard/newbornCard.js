import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { NewbornCard } from './newbornCard.style';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import { Line } from 'react-chartjs-2';

import { history } from '../../store/store';
import { Link } from 'react-router-dom';

function NewBornCard(props) {
  const { newbornId } = props;
  return (
    <NewbornCard>
      <Link to={`/newborn-record/${newbornId}`}>
        <CardHeader avatar={<Avatar aria-label="Recipe" />} title="Shrimp and Chorizo Paella" subheader="September 14, 2016" />
      </Link>
      <Line
        options={{
          legend: {
            display: false,
            spanGaps: false,
          },
          scales: {
            xAxes: [
              {
                display: false, // this will remove all the x-axis grid lines
              },
            ],
            yAxes: [
              {
                display: false, // this will remove all the x-axis grid lines
              },
            ],
          },
        }}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              data: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
            },
          ],
        }}
        height={160}
      />
    </NewbornCard>
  );
}

export default NewBornCard;
