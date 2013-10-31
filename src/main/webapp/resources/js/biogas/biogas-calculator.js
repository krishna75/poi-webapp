/* Input variables */
var  cows = 1;
var  area = 1;

var  cowSlurry = 1;
var  cowDryMatter = 1;

var  cropYield = 1;
var  cropDryMatter = 1;



/* Events and actions */
$("#cowSlider").bind("slider:changed", function (event, data) {
     cows = data.value;
     $("#cowValue").text(data.value);
     update();
});


$("#areaSlider").bind("slider:changed", function (event, data) {
     area = data.value;
     $("#areaValue").text(data.value);
     update();
});

$("#cowSlurry").change(function() {
     var value = $("#cowSlurry").val();
     console.log("cowSlurry = "+value);
     cowSlurry= parseInt(value);
     update();
});

$("#cowDryMatter").change(function() {
     var value = $("#cowDryMatter").val();
     console.log("cowDryMatter = "+value);
     cowDryMatter = parseInt(value);
     update();
});


$("#cropYield").change(function() {
     var value = $("#cropYield").val();
     console.log("cropYield = "+value);
     cropYield = parseInt(value);
     update();
});

$("#cropDryMatter").change(function() {
     var value = $("#cropDryMatter").val();
     console.log("cropDryMatter = "+value);
     cropDryMatter = parseInt(value);
     update();
});


/* Sends and receives info from server in json format*/
function update(){
     $.ajax({
         url:"biogas-json",
         type:"POST",
         data:getInputJson(),
         contentType:"application/json; charset=utf-8",
     })
     .done(function(outputData){
        console.log("response json = "+outputData);

        var biogasJson = jQuery.parseJSON( outputData );
        $("#biogas").text( biogasJson.biogas);
        $("#energy").text( biogasJson.energy);
        $("#cowBiogas").text( biogasJson.cowBiogas);
        $("#cropBiogas").text( biogasJson.cropBiogas);
     });
}


/* Creates json object */
function getInputJson(){
    var mapArray = [
        new Map("cows",parseInt(cows)),
        new Map("area",parseInt(area)),
        new Map("cowSlurry",parseInt(cowSlurry)),
        new Map("cowDryMatter",parseInt(cowDryMatter)),
        new Map("cropYield",parseInt(cropYield)),
        new Map("cropDryMatter",parseInt(cropDryMatter))
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


/* Class Map */
function Map(key,value){
    this.key = key;
    this.value = value;
    this.getKey = getMapKey;
    this.getValue = getMapValue;
}
function getMapKey(){return this.key;}
function getMapValue(){ return  this.value;}
