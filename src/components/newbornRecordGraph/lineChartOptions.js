export default (data, lineColor) => {
  console.log(data.datasets);
  return {
    chart: {
      backgroundColor: "transparent",
      height: 350,
      width: 500,
      type: "areaspline",
      spacing: 0
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    legend: {
      enabled: false,
      spanGaps: false
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: "%e. %b",
        year: "%b"
      },
      title: {
        text: "Date"
      },
      lineColor: "black",
      lineWidth: 2,
      opposite: true
    },
    yAxis: {
      title: {
        text: ""
      },
      min: 0,
      opposite: true
    },
    plotOptions: {
      series: {
        color: lineColor,
        pointPlacement: "between",
        borderWidth: 0
      },
      areaspline: {
        // marker: {
        //   enabled: false
        // }
      }
    },
    series: data.datasets
  };
};
