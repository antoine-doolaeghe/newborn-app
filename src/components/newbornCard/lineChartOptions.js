export default minValue => {
  return {
    legend: {
      display: false,
      spanGaps: false
    },
    scales: {
      xAxes: [
        {
          display: false
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
          display: false
        }
      ]
    }
  };
};
