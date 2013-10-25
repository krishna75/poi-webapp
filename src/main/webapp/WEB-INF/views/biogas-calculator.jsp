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

    <link href="<c:url value='/resources/css/biogas-calculator.css' />" rel="stylesheet" type="text/css" />
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

   <script src="<c:url value='/resources/js/biogas-calculator.js' />"></script>
</body>
</html>