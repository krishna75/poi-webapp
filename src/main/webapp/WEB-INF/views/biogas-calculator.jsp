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
                  <input type="text" size="40" id="cowSlurry" />
              </li>
              <li>
                <label for="cowDryMatter">% Dry Matter (77,000) </label>
                  <input type="text" size="40" id="cowDryMatter" />
              </li>
              <li>
                   Cow-Biogas: <span id="cowBiogas" class="output"> 0 </span>
              </li>
        </ul>
    </td>

    <td>
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