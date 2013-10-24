var  cows = 1;
var  area = 1;
$("#cow-slider").bind("slider:changed", function (event, data) {
 cows = data.value;
 $("#cow-value").text(data.value.toFixed(0));
 update();
});

$("#area-slider").bind("slider:changed", function (event, data) {
 area = data.value;
 $("#area-value").text(data.value.toFixed(0));
 update();
});

function update(){
     $.ajax({
         url:"http://localhost:8080/bioen%20Spring-WS%20Application/biogas-json",
         type:"POST",
         data:getInputJson(),
         contentType:"application/json; charset=utf-8",
     })
     .done(function(outputData){
        $("#test").text( outputData);
        var biogasJson = jQuery.parseJSON( outputData );
        $("#biogas").text( biogasJson.biogas);
        $("#energy").text( biogasJson.energy);
     });
}



function getInputJson(){
    var mapArray = [
        new Map("cows",parseInt(cows)),
        new Map("area",parseInt(area))
    ];

    var json = '{';
    for (i=0;i<mapArray.length;i++){
        var map = mapArray[i];
        json += '"'+map.getKey()+'":';
        json += '"'+map.getValue()+'"';
        if (i< mapArray.length-1){
            json += ',';
        }
    }
    json += '}';
    return json;
}



function Map(key,value){
    this.key = key;
    this.value = value;
    this.getKey = getMapKey;
    this.getValue = getMapValue;
}

function getMapKey(){
    return this.key;
}

function getMapValue(){
   return  this.value;
}
