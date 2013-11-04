function drawBiogasCharts(){
console.log("Creating Charts");
drawLivestockPieChart();

               var data = google.visualization.arrayToDataTable([
                 ['Year', 'Sales', 'Ex'],
                 ['2004',  1000,      400],
                 ['2005',  1170,      460],
                 ['2006',  660,       1120],
                 ['2007',  1030,      540]
               ]);

               var options = {
                 title: 'Company Performance'
               };
var chart = new google.visualization.LineChart(document.getElementById('chart1'));

               chart.draw(data, options);




            var optionsCol = {
                 title: 'Company Performance',
                 hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
            };

var chartCol = new google.visualization.ColumnChart(document.getElementById('chart2'));
               chartCol.draw(google.visualization.arrayToDataTable(livestockData()), optionsCol);
  }

function drawLivestockPieChart(){
              var optionsPie = {
                title: 'Livestock Biomass Chart'
              };
              var chartPie = new google.visualization.PieChart(document.getElementById('chart3'));
              chartPie.draw(google.visualization.arrayToDataTable(livestockData()), optionsPie);
}