/* Input variables */
var  zeroGrazedCows = 1;
var  summerGrazedCows = 1;
var  maizeSilageArea = 1;
var  currentElectricityBill = 1;
var  heatingBillToBeDisplaced = 1;

/* Output variables */
var capitalInvestment = 1 ;
var electricityCapacity = 1 ;
var simplePayback = 1 ;

/* Events and actions */
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
        capitalInvestment = biogasJson.capitalInvestment;
        electricityCapacity = biogasJson.electricityCapacity;
        simplePayback = biogasJson.simplePayback;

        $("#capitalInvestment").text( capitalInvestment);
        $("#electricityCapacity").text( electricityCapacity);
        $("#simplePayback").text( simplePayback);
     });
}


/* Creates json object */
function getInputJson(){
    var mapArray = [
        new Map("zeroGrazedCows",parseInt(zeroGrazedCows)),
        new Map("summerGrazedCows",parseInt(summerGrazedCows)),
        new Map("maizeSilageArea",parseInt(maizeSilageArea)),
        new Map("currentElectricityBill",parseInt(currentElectricityBill)),
        new Map("heatingBillToBeDisplaced",parseInt(heatingBillToBeDisplaced))
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
