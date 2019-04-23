export default (data, lineColor) => {
  return {
    chart: {
      backgroundColor: "transparent",
      height: 150,
      width: 246,
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
      offset: 0,
      minorGridLineWidth: 0,
      visible: false
    },
    xAxis: {
      offset: 0,
      minorGridLineWidth: 0,
      visible: false,
      categories: data.labels
    }
  };
};
