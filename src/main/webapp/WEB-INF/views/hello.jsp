<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html; charset=UTF-8" %>
<html>


<head>
<title>BioEN</title>

<script  src="<c:url value='/resources/js/bootstrap.js' />"></script>
<link href="<c:url value='/resources/css/bootstrap.css' />" rel="stylesheet" type="text/css">

<script src="<c:url value='/resources/js/jquery-1.10.2.js' />"></script>

<script src="<c:url value='/resources/js/simple-slider.js' />"></script>
<link href="<c:url value='/resources/css/simple-slider.css' />" rel="stylesheet" type="text/css" />





</head>
<body>

   <h2>${message}</h2>

   <input id="cow-slider" type="text" data-slider="true" data-slider-range="11,2000">
   <input id="cow-value" type="text">


   <script>
    $("#cow-slider").bind("slider:changed", function (event, data) {
      $("#cow-value").val(data.value.toFixed(0));

    });

   </script>
</body>
</html>