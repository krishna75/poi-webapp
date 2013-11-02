<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>BioEN FIT Calculator</title>

    <script  src="<c:url value='/resources/js/bootstrap.js' />"></script>
    <link href="<c:url value='/resources/css/bootstrap.css' />" rel="stylesheet" type="text/css">

    <script src="<c:url value='/resources/js/jquery-1.10.2.js' />"></script>

    <script src="<c:url value='https://www.google.com/jsapi' />"></script>
    <script src="<c:url value='/resources/js/biogas/biogas-chart.js' />"></script>

    <script src="<c:url value='/resources/js/simple-slider.js' />"></script>
    <link href="<c:url value='/resources/css/simple-slider.css' />" rel="stylesheet" type="text/css" />

    <link href="<c:url value='/resources/css/biogas-calculator.css' />" rel="stylesheet" type="text/css" />


    <script type="text/javascript" charset="utf-8">


          $(function(){
            $("input:checkbox, input:radio, input:file, select").uniform();
          });
    </script>
</head>
<body>
   <img src="<c:url value='/resources/images/bcu.png' />" />
   <img src="<c:url value='/resources/images/aston_business.png' />" />
   <img src="<c:url value='/resources/images/ebri.png' />" />
   <img src="<c:url value='/resources/images/investor_people.png' />" />
   <img src="<c:url value='/resources/images/greenwatt.png' />" />
   <img src="<c:url value='/resources/images/bioen.png' />" />
   <img src="<c:url value='/resources/images/nwe.png' />" />
   <h1>${message}</h1>
   <hr/>

   <div class="formContent" >
       <table>
       <tr>
           <td>

               Number of zero-grazed dairy cows  :
               <span id="zeroGrazedCowsValue">0</span>
               <input id="zeroGrazedCows" type="text" data-slider="true" data-slider-range="0,900">

               Number of summer grazed dairy cows :
               <span id="summerGrazedCowsValue">0</span>
               <input id="summerGrazedCows" type="text" data-slider="true" data-slider-range="0,900">

               Area of Maize Silage :
               <span id="maizeSilageAreaValue">0</span>
               <input id="maizeSilageArea" type="text" data-slider="true" data-slider-range="0,300">

               Current farm electricty bill :
               <span id="currentElectricityBillValue">0</span>
               <input id="currentElectricityBill" type="text" data-slider="true" data-slider-range="0,45000">

               On-farm heating bill to be displaced :
               <span id="heatingBillToBeDisplacedValue">0</span>
               <input id="heatingBillToBeDisplaced" type="text" data-slider="true" data-slider-range="0,15000">

         </td>
         <td>

               <div class="output-block">  Capital Investment : <span id="capitalInvestment" class="output"> 0 </span> </div>

                <div class="output-block">  Electrical Capacity: <span id="electricityCapacity" class="output">0 </span> </div>

                 <div class="output-block"> Simple Payback: <span id="simplePayback" class="output">0 </span> </div>

        </td>


        <td>
    </tr>
    <tr>
         <td>

             <div id="chart1"></div>
          </td>
          <td>
              <div id="chart2"></div>
          </td>
          <td>
              <div id="chart3"></div>
          </td>
    </tr>
    </table>

 </div>

  </article>
  <footer>
  <p>A part of BioEN project</p>
  </footer>







   <script src="<c:url value='/resources/js/biogas/biogas-calculator.js' />"></script>

</body>
</html>