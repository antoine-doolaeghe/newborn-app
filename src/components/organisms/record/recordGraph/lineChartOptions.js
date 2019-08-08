export default (data, lineColor) => {
  return {
    chart: {
      backgroundColor: "transparent",
      height: 250,
      width: 500,
      type: "line",
      // spacing: 0,
      zoomType: "x"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    tooltip: {
      shadow: false,
      borderWidth: 0,
      useHTML: true,
      backgroundColor: "white",
      style: { position: "absolute" }
    },
    legend: {
      enabled: false,
      spanGaps: false
    },
    xAxis: {
      visible: false,
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e. %b",
        year: "%b"
      },
      title: {
        text: ""
      },
      lineColor: "black",
      lineWidth: 2
      // opposite: true
    },
    yAxis: {
      // visible: false,
      title: {
        text: ""
      }
      // opposite: . true
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
