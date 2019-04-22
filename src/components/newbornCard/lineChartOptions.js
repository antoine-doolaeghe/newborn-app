export default (data, lineColor) => {
  return {
    chart: {
      height: 150,
      type: "line"
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        color: lineColor
      }
    },
    series: data.datasets,
    credits: {
      enabled: false
    },
    yAxis: {
      visible: false
    },
    xAxis: {
      visible: false
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
