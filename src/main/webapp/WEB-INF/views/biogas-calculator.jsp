<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>BioEN FIT Calculator</title>

    <script  src="<c:url value='/resources/js/bootstrap.js' />"></script>
    <link href="<c:url value='/resources/css/bootstrap.css' />" rel="stylesheet" type="text/css">

    <script src="<c:url value='/resources/js/jquery-1.10.2.js' />"></script>

    <script src="<c:url value='/resources/js/simple-slider.js' />"></script>
    <link href="<c:url value='/resources/css/simple-slider.css' />" rel="stylesheet" type="text/css" />

    <script src="<c:url value='/resources/js/sexy-form.js' />"></script>
    <link href="<c:url value='/resources/css/sexy-form.css' />" rel="stylesheet" type="text/css" />
    <link href='http://fonts.googleapis.com/css?family=Engagement' rel='stylesheet' type='text/css'>

    <script src="<c:url value='/resources/js/Chart.js' />"></script>


    <link href="<c:url value='/resources/css/biogas-calculator.css' />" rel="stylesheet" type="text/css" />

    <script type="text/javascript" charset="utf-8">


          $(function(){
            $("input:checkbox, input:radio, input:file, select").uniform();
          });
    </script>
</head>
<body>

   <h2>${message}</h2>
   <hr/>

   <div class="formContent" >
       <table>
       <tr>
           <td>

               Number of Dairy Cows:
               <span id="cowValue">0</span>
               <input id="cowSlider" type="text" data-slider="true" data-slider-range="11,2000">

                Area of Maize Silage:
               <span id="areaValue">0</span>
               <input id="areaSlider" type="text" data-slider="true" data-slider-range="11,2000">

               <hr/>
               Biogas: <span id="biogas" class="output"> 0 </span>
               Engergy: <span id="energy" class="output">0 </span>

                <ul>
                  <li>
                    <label for="cowSlurry">Slurry Production per Cow (kg/hd/day) </label>
                      <input type="text" size="20" id="cowSlurry" />
                  </li>
                  <li>
                    <label for="cowDryMatter">% Dry Matter (77,000) </label>
                      <input type="text" size="20" id="cowDryMatter" />
                  </li>
                  <li>
                       Cow-Biogas: <span id="cowBiogas" class="output"> 0 </span>
                  </li>
                </ul>
        </td>

        <td>
            <ul>
                 <li>
                   <label for="cropYield">Crop Yield (tonne/ha/yr) </label>
                     <input type="text" size="20" id="cropYield" />
                 </li>
                 <li>
                   <label for="cropDryMatter">Crop % Dry Matter (77,000) </label>
                     <input type="text" size="20" id="cropDryMatter" />
                 </li>
                 <li>
                      Crop-Biogas: <span id="cropBiogas" class="output"> 0 </span>
                 </li>
               </ul>
        </td>
    </tr>
    <tr>
      <td>
         <canvas id="myChart" width="400" height="400"></canvas>
         <script>
            var data = {
            	labels : ["January","February","March","April","May","June","July"],
            	datasets : [
            		{
            			fillColor : "rgba(220,220,220,0.5)",
            			strokeColor : "rgba(220,220,220,1)",
            			pointColor : "rgba(220,220,220,1)",
            			pointStrokeColor : "#fff",
            			data : [65,59,90,81,56,55,40]
            		},
            		{
            			fillColor : "rgba(151,187,205,0.5)",
            			strokeColor : "rgba(151,187,205,1)",
            			pointColor : "rgba(151,187,205,1)",
            			pointStrokeColor : "#fff",
            			data : [28,48,40,19,96,27,100]
            		}
            	]
            }
          //Get context with jQuery - using jQuery's .get() method.
          var ctx = $("#myChart").get(0).getContext("2d");
          //This will get the first returned node in the jQuery collection.
          var myNewChart = new Chart(ctx);

          myNewChart.Bar(data);


         </script>
      </td>
    </tr>
    </table>

 </div>

  </article>
  <footer>
  <p>A part of BioEN project</p>
  </footer>





   <script src="<c:url value='/resources/js/biogas-calculator.js' />"></script>
</body>
</html>