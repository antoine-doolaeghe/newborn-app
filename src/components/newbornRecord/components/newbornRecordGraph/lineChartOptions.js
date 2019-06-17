export default (data, lineColor, range) => {
  return {
    chart: {
      backgroundColor: "transparent",
      height: 300,
      width: 500,
      type: "line",
      spacing: 0,
      zoomType: "x"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    tooltip: {
      positioner() {
        return { x: 80, y: 50 };
      },
      shadow: false,
      borderWidth: 0,
      backgroundColor: "white"
    },
    legend: {
      enabled: false,
      spanGaps: false
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e. %b",
        year: "%b"
      },
      title: {
        text: ""
      },
      // range,
      lineColor: "black",
      lineWidth: 2,
      opposite: true
    },
    yAxis: {
      title: {
        text: ""
      },
      opposite: true
    },
    plotOptions: {
      series: {
        color: lineColor,
        pointPlacement: "between",
        borderWidth: 0,
        dataGrouping: {
          smoothed: true
        }
      }
    },
    series: data.datasets
  };
};
