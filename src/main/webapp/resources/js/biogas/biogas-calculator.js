/* Input variables */
var  zeroGrazedCows = 1;
var  summerGrazedCows = 1;
var  maizeSilageArea = 1;
var  currentElectricityBill = 1;
var  heatingBillToBeDisplaced = 1;

//
var cropYield = 1;
var costArableCrop = 1;
var electricityUnitPrice = 1;
var heatingFuelUnitPrice = 1;
var exportedElectricityValue = 1.0;

updateDefaultValues();

/* Output json */
var biogasJson = eval("({\"name\":\"biogas\"})" );

update();

/*******************   EVENTS AND ACTIONS  ************************/


$("#zeroGrazedCows").bind("slider:changed", function (event, data) {
     zeroGrazedCows = Math.round(data.value);
     $("#zeroGrazedCowsValue").text(zeroGrazedCows);
     update();
});

$("#summerGrazedCows").bind("slider:changed", function (event, data) {
     summerGrazedCows = Math.round(data.value);
     $("#summerGrazedCowsValue").text(summerGrazedCows);
     update();
});

$("#maizeSilageArea").bind("slider:changed", function (event, data) {
     maizeSilageArea = Math.round(data.value);
     $("#maizeSilageAreaValue").text(maizeSilageArea);
     update();
});

$("#currentElectricityBill").bind("slider:changed", function (event, data) {
     currentElectricityBill = Math.round(data.value);
     $("#currentElectricityBillValue").text(currentElectricityBill);
     update();
});

$("#heatingBillToBeDisplaced").bind("slider:changed", function (event, data) {
     heatingBillToBeDisplaced = Math.round(data.value);
     $("#heatingBillToBeDisplacedValue").text(heatingBillToBeDisplaced);
     update();
});

$("#cropYield").change(function() {
     var value = $(this).val();
     console.log("cropYield = "+value);
     cropYield= parseInt(value);
     update();
});
$("#costArableCrop").change(function() {
     var value = $(this).val();
     console.log("costArableCrop = "+value);
     costArableCrop= parseInt(value);
     update();
});
$("#electricityUnitPrice").change(function() {
     var value = $(this).val();
     console.log("electricityUnitPrice = "+value);
     electricityUnitPrice= parseInt(value);
     update();
});
$("#heatingFuelUnitPrice").change(function() {
     var value = $(this).val();
     console.log("heatingFuelUnitPrice = "+value);
     heatingFuelUnitPrice= parseInt(value);
     update();
});
$("#exportedElectricityValue").change(function() {
     var value = $(this).val();
     console.log("exportedElectricityValue = "+value);
     exportedElectricityValue= parseInt(value);
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
        biogasJson = jQuery.parseJSON( outputData );
        console.log("biogas json size : " + Object.keys(biogasJson).length);

        //output variables
        $("#capitalInvestment").text( biogasJson.capitalInvestment);
        $("#electricityCapacity").text( biogasJson.electricityCapacity);
        $("#simplePayback").text( biogasJson.simplePayback);

        // create charts
          drawBiogasCharts();
     });

}


/* Creates json object */
function getInputJson(){
    var mapArray = [
        new Map("zeroGrazedCows",parseInt(zeroGrazedCows)),
        new Map("summerGrazedCows",parseInt(summerGrazedCows)),
        new Map("maizeSilageArea",parseInt(maizeSilageArea)),
        new Map("currentElectricityBill",parseInt(currentElectricityBill)),
        new Map("heatingBillToBeDisplaced",parseInt(heatingBillToBeDisplaced)),

        new Map("cropYield",parseInt(cropYield)),
        new Map("costArableCrop",parseInt(costArableCrop)),
        new Map("electricityUnitPrice",parseInt(electricityUnitPrice)),
        new Map("heatingFuelUnitPrice",parseInt(heatingFuelUnitPrice)),
        new Map("exportedElectricityValue",parseInt(exportedElectricityValue))
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



 function updateDefaultValues(){

zeroGrazedCows = $("#zeroGrazedCows").val();
$("#zeroGrazedCowsValue").text(zeroGrazedCows);
summerGrazedCows = $("#summerGrazedCows").val();
$("#summerGrazedCowsValue").text(summerGrazedCows);
maizeSilageArea = $("#maizeSilageArea").val();
$("#maizeSilageAreaValue").text(maizeSilageArea);
currentElectricityBill = $("#currentElectricityBill").val();
$("#currentElectricityBillValue").text(currentElectricityBill);
heatingBillToBeDisplaced = $("#heatingBillToBeDisplaced").val();
$("#heatingBillToBeDisplacedValue").text(heatingBillToBeDisplaced);

 cropYield = $("#cropYield").val();
 costArableCrop = $("#costArableCrop").val();
 electricityUnitPrice = $("#electricityUnitPrice").val();
 heatingFuelUnitPrice = $("#heatingFuelUnitPrice").val();
 exportedElectricityValue = $("#exportedElectricityValue").val();

 }


