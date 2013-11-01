google.load("visualization", "1", {packages:["corechart"]});
             google.setOnLoadCallback(drawChart);
             function drawChart() {
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




               var dataPie = google.visualization.arrayToDataTable([
                         ['Task', 'Hours per Day'],
                         ['Work',     11],
                         ['Eat',      2],
                         ['Commute',  2],
                         ['Watch TV', 2],
                         ['Sleep',    7]
                       ]);

                       var optionsPie = {
                         title: 'My Daily Activities'
                       };

                       var chartPie = new google.visualization.PieChart(document.getElementById('chart3'));
                       chartPie.draw(dataPie, options);


               var optionsCol = {
                         title: 'Company Performance',
                         hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
                       };

               var chartCol = new google.visualization.ColumnChart(document.getElementById('chart2'));
               chartCol.draw(dataPie, optionsCol);
             }


