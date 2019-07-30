export default (data, lineColor, range) => {
  return {
    chart: {
      backgroundColor: "transparent",
      height: 150,
      width: 220,
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
    tooltip: {
      positioner() {
        return { x: 80, y: 50 };
      },
      shadow: false,
      borderWidth: 0,
      backgroundColor: "white"
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
      min: 0,
      visible: false
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: "%e. %b",
        year: "%b"
      },
      title: {
        text: ""
      },
      range,
      lineColor: "black",
      lineWidth: 0,
      opposite: true
    }
  };
};
