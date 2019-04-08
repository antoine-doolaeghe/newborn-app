export default minValue => {
  return {
    legend: {
      display: false,
      spanGaps: false
    },
    scales: {
      xAxes: [
        {
          display: false // this will remove all the x-axis grid lines
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            suggestedMin: 0,
            suggestedMax: 10,
            beginAtZero: false
          },
          display: false // this will remove all the x-axis grid lines
        }
      ]
    }
  };
};
