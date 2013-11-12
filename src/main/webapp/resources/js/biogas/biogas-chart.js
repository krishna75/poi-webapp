function drawBiogasCharts(){
    console.log("Creating Charts ... ");
    drawLivestockPieChart();
    drawCropAreaPieChart();
    drawOperatingCostChart();
    drawCashFlowChart();
    drawSensitivityAnalysisChart();
    drawSensitivityTable();
}

function drawLivestockPieChart(){
              var options = {
                title: 'Livestock Biomass Chart',
                backgroundColor: {strokeWidth: 2 },
                chartArea:{left:30,top:50,width:'100%'},
                legend:{position:'right'}
              };
              var chart = new google.visualization.PieChart(document.getElementById('chart1'));
              chart.draw(google.visualization.arrayToDataTable(livestockData()), options);
}

function drawCropAreaPieChart(){
              var options = {
                title: 'Crop Area Chart',
                backgroundColor: {strokeWidth: 2 },
                chartArea:{left:30,top:50,width:'100%'},
              };
              var chart = new google.visualization.PieChart(document.getElementById('chart2'));
              chart.draw(google.visualization.arrayToDataTable(cropAreaData()), options);
}


function drawOperatingCostChart(){
              var options = {
                 title: 'Operating Cost Chart' ,
                 backgroundColor: {strokeWidth: 2 },
                 isStacked: 'true',
                 chartArea:{left:30,top:50,width: 150},
                 legend:{position:'right'},
                 hAxis:{maxValue:2,ticks:[0.5,1,2]}
              };
              var chart = new google.visualization.ColumnChart(document.getElementById('chart3'));
              chart.draw(google.visualization.arrayToDataTable(operatingCostData()), options);
}

function drawCashFlowChart(){
              var options = {
                title: 'Cash Flow Chart',
                backgroundColor: {strokeWidth: 2 },
                legend: 'none',
                 chartArea:{left:50,top:50,width:'80%'}
              };
              var chart = new google.visualization.AreaChart(document.getElementById('chart4'));
              chart.draw(google.visualization.arrayToDataTable(cashFlowData()), options);
}

function drawSensitivityAnalysisChart(){
              var options = {
                title: 'Sensitivity Analysis Chart',
                backgroundColor: {strokeWidth: 2 },
                chartArea:{left:30,top:50,right:10}
              };
              var chart = new google.visualization.LineChart(document.getElementById('chart5'));
              chart.draw(google.visualization.arrayToDataTable(sensitivityAnalysisData()), options);
}
function drawSensitivityTable(){

              var data = new google.visualization.DataTable();
                      data.addColumn('string', 'Name');
                      data.addColumn('number', 'Salary');
                      data.addColumn('boolean', 'Full Time Employee');
                      data.addRows([
                        ['Mike',  {v: 10000, f: '$10,000'}, true],
                        ['Jim',   {v:8000,   f: '$8,000'},  false],
                        ['Alice', {v: 12500, f: '$12,500'}, true],
                        ['Bob',   {v: 7000,  f: '$7,000'},  true]
                      ]);

                      var table = new google.visualization.Table(document.getElementById('chart6'));
                      table.draw(google.visualization.arrayToDataTable(sensitivityTableData()), {showRowNumber: true});
}