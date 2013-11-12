<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
    <title>BioEN FIT Calculator</title>

    <script  src="<c:url value='/resources/js/bootstrap.js' />"></script>
    <link href="<c:url value='/resources/css/bootstrap.css' />" rel="stylesheet" type="text/css">

    <script src="<c:url value='/resources/js/jquery-1.10.2.js' />"></script>
    <script type="text/javascript" src="//www.google.com/jsapi"></script>

    <script src="<c:url value='/resources/js/simple-slider.js' />"></script>
    <link href="<c:url value='/resources/css/simple-slider.css' />" rel="stylesheet" type="text/css" />

    <link href="<c:url value='/resources/css/biogas-calculator.css' />" rel="stylesheet" type="text/css" />


    <script type="text/javascript" charset="utf-8">
           google.load("visualization", "1", {packages:["corechart"]});
           google.load('visualization', '1', {packages:['table']});

          $(function(){
            $("input:checkbox, input:radio, input:file, select").uniform();
          });
    </script>
</head>
<body >
<div class="header">
   <img class="logo" src="<c:url value='/resources/images/bcu.png' />" />
   <img class="logo" src="<c:url value='/resources/images/aston_business.png' />" />
   <img class="logo" src="<c:url value='/resources/images/ebri.png' />" />
   <img class="logo" src="<c:url value='/resources/images/investor_people.png' />" />
   <img class="logo" src="<c:url value='/resources/images/greenwatt.png' />" />
   <img class="logo" src="<c:url value='/resources/images/bioen.png' />" />
   <img class="logo" src="<c:url value='/resources/images/nwe.png' />" />
</div>
   <h1>${message}</h1>
   <div class="formContent" >
       <table>
       <tr>
           <td>

               <span class="label">  Number of zero-grazed dairy cows  :
               <span id="zeroGrazedCowsValue">0</span>
               <input id="zeroGrazedCows" type="text" data-slider="true" data-slider-range="0,900" value="500">

               Number of summer grazed dairy cows :
               <span id="summerGrazedCowsValue">0</span>
               <input id="summerGrazedCows" type="text" data-slider="true" data-slider-range="0,900" value="200">

               Area of Maize Silage :
               <span id="maizeSilageAreaValue">0</span>
               <input id="maizeSilageArea" type="text" data-slider="true" data-slider-range="0,300" value="100">

               Current farm electricity bill :
               <span id="currentElectricityBillValue">0</span>
               <input id="currentElectricityBill" type="text" data-slider="true" data-slider-range="0,45000" value="10000">

               On-farm heating bill to be displaced :
               <span id="heatingBillToBeDisplacedValue">0</span>
               <input id="heatingBillToBeDisplaced" type="text" data-slider="true" data-slider-range="0,15000" value="5000">

               Crop Yield (t/ha): <input id="cropYield" type="text" value="35"/> <br/>
               Cost of arable crop (£/t): <input id="costArableCrop" type="text" value="20"/> <br/>
               Electricity unit price (p/kWh): <input id="electricityUnitPrice" type="text" value="20"/> <br/>
               Heating fuel unit price (p/kWh): <input id="heatingFuelUnitPrice" type="text" value="6"/>  <br/>
               Exported electricity value (p/kWh): <input id="exportedElectricityValue" type="text" value="4.6"/>  <br/>

               </span>
         </td>
         <td>
                 <span class="label">
                 <div class="output-block"> <span class="label"> Capital Investment :</span> <span id="capitalInvestment" class="output"> 0 </span> </div>
                 <div class="output-block"> <span class="label"> Electrical Capacity:</span> <span id="electricityCapacity" class="output">0 </span> </div>
                 <div class="output-block"> <span class="label">Simple Payback:</span> <span id="simplePayback" class="output">0 </span> </div>
                 </span>

        </td>
        <td>
            <div id="chart3"></div>
        </td>
    </tr>
    <tr>
         <td>
             <div id="chart1"></div>
          </td>
          <td>
              <div id="chart2"></div>
          </td>
          <td>
             <div id="chart7"></div>
          </td>
          <td>
              <div id="chart8"></div>
          </td>

    </tr>
     <tr>
             <td>

                 <div id="chart4"></div>
              </td>
              <td>
                  <div id="chart5"></div>
              </td>
              <td>
                  <div id="chart6"></div>
              </td>
        </tr>
    </table>

 </div>

  </article>
  <footer>
  <p>A part of BioEN project</p>
  </footer>

   <script src="<c:url value='/resources/js/biogas/biogas-calculator.js' />"></script>
   <script src="<c:url value='/resources/js/biogas/biogas-chart-data.js' />"></script>
   <script src="<c:url value='/resources/js/biogas/biogas-chart.js' />"></script>

</body>
</html>