function drawBiogasCharts(){
    console.log("Creating Charts ... ");
    drawLivestockPieChart();
    drawCropAreaPieChart();
    drawOperatingCostChart();
    drawCashFlowChart();
    drawSensitivityAnalysisChart();
}

function drawLivestockPieChart(){
              var options = {
                title: 'Livestock Biomass Chart'
              };
              var chart = new google.visualization.PieChart(document.getElementById('chart1'));
              chart.draw(google.visualization.arrayToDataTable(livestockData()), options);
}

function drawCropAreaPieChart(){
              var options = {
                title: 'Crop Area Chart'
              };
              var chart = new google.visualization.PieChart(document.getElementById('chart2'));
              chart.draw(google.visualization.arrayToDataTable(cropAreaData()), options);
}


function drawOperatingCostChart(){
              var options = {
                title: 'Operating Cost Chart'
              };
              var chart = new google.visualization.ColumnChart(document.getElementById('chart3'));
              chart.draw(google.visualization.arrayToDataTable(operatingCostData()), options);
}

function drawCashFlowChart(){
              var options = {
                title: 'Cash Flow Chart'
              };
              var chart = new google.visualization.AreaChart(document.getElementById('chart4'));
              chart.draw(google.visualization.arrayToDataTable(cashFlowData()), options);
}

function drawSensitivityAnalysisChart(){
              var options = {
                title: 'Sensitivity Analysis Chart'
              };
              var chart = new google.visualization.LineChart(document.getElementById('chart5'));
              chart.draw(google.visualization.arrayToDataTable(sensitivityAnalysisData()), options);
}