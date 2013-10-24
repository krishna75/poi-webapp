<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>


<head>
<title>BioEN</title>

<script  src="<c:url value='/resources/js/bootstrap.js' />"></script>
<link href="<c:url value='/resources/css/bootstrap.css' />" rel="stylesheet" type="text/css">

<script src="<c:url value='/resources/js/jquery-1.10.2.js' />"></script>

<script src="<c:url value='/resources/js/simple-slider.js' />"></script>
<link href="<c:url value='/resources/css/simple-slider.css' />" rel="stylesheet" type="text/css" />



<style>
 .form-content{
  margin-left:25px;
 }
  .output{
  width:200px;
  height:50px;
  background-color:green;
  border:1px solid gray;
  border-radius: 5px;
 }


</style>

</head>
<body>

   <h2>${message}</h2>
   <hr/>

   <div class="form-content" >

        Number of Dairy Cows:
       <span id="cow-value">0</span>
       <input id="cow-slider" type="text" data-slider="true" data-slider-range="11,2000">

        Area of Maize Silage:
       <span id="area-value">0</span>
       <input id="area-slider" type="text" data-slider="true" data-slider-range="11,2000">

       <hr/>
       Test: <span id="test" class="output"> 0 </span> <br/>
       Biogas: <span id="biogas" class="output"> 0 </span>
       Engergy: <span id="energy" class="output">0 </span>

  </div>

   <script>
    $("#cow-slider").bind("slider:changed", function (event, data) {
     $("#cow-value").text(data.value.toFixed(0));
     update();
    });

    $("#area-slider").bind("slider:changed", function (event, data) {
     $("#area-value").text(data.value.toFixed(0));
    });

    function update(){
        var newJsonString = '{"cows":"205","area":"300"}';

         $.ajax({
             url:"http://localhost:8080/bioen%20Spring-WS%20Application/biogas-json",
             type:"POST",
             data:newJsonString,
             contentType:"application/json; charset=utf-8",
         })
         .done(function(outputData){
            $("#test").text( outputData);
            var biogasJson = jQuery.parseJSON( outputData );
            $("#biogas").text( biogasJson.biogas);
            $("#energy").text( biogasJson.energy);
         });

    }

   </script>
</body>
</html>