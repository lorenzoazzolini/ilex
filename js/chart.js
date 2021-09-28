var options = {
  chart: {
    height: 380,
    width: "100%",
    type: "line"
  },
  series: [
    {
      name: "Liguria",
      data: [
        1.8,
        2.3,
        2.7,
        2.4,
        3.3,
        4.9,
        6.1,
        4.5,
        4.5,
        4.6,
        5.1,
        5.0
    ]
    },
    {
        name: "Düsseldorf",
        data: [
            3.9,
            3.5,
            3.6,
            3.5,
            3.2,
            3.1,
            3.1,
            2.9,
            2.2,
            2.0,
            1.9,
            1.6
      ]
      }
  ],
  xaxis: {
    categories: [
      "1008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
