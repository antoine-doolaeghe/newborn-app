export default (data, lineColor) => {
  return {
    chart: {
      backgroundColor: "transparent",
      height: 350,
      width: 500,
      type: "areaspline",
      margin: 0,
      padding: 0,
      spacing: 0
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false,
      spanGaps: false
    },
    plotOptions: {
      series: {
        color: lineColor,
        pointPlacement: "between",
        borderWidth: 0
      },
      areaspline: {
        marker: {
          enabled: false
        }
      }
    },
    series: data.datasets,
    credits: {
      enabled: false
    },
    yAxis: {
      // offset: 0,
      labels: {
        enabled: true
      },
      minorGridLineWidth: 0
    },
    xAxis: {
      // offset: 0,
      minorGridLineWidth: 0,
      labels: {
        enabled: true
      },
      categories: data.labels
    }
  };
};
