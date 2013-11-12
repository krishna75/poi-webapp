/* for pie chart */
function livestockData() {
     return [
               ['Livestock', 'Biomass'],
               ['Zero Grazed Cows',     parseInt(biogasJson.zeroGrazedCows)],
               ['Summer Grazed Cows',   parseInt(biogasJson.summerGrazedCows)]
     ];
}

function cropAreaData() {
     return [
               ['Crop', 'Area (HA)'],
               ['Permanent Pasture',     parseInt(biogasJson.permanentPastureArea)],
               ['Maize',   parseInt(biogasJson.maizeSilageArea)],
               ['Wheat',   parseInt(biogasJson.wheatArea)]
     ];
}


function operatingCostData() {
     return [
               [
                   'Data',
                   'Maintenance and Operation',
                   'Annual Energy Crop Cost',
                   'Value of Displayed Electricity',
                   'Income from Export Tariff',
                   'Income from Generation Tariff',
                   'Displayed Heating Cost',
                   'RHI Payment'
               ],
               [
                    1,
                    parseInt(biogasJson.maintenanceAndOperationCost),
                    parseInt(biogasJson.annualEnergyCropCost),
                    parseInt(biogasJson.valueOfDispatchedElectricity),
                    parseInt(biogasJson.incomeFromExportTariff),
                    parseInt(biogasJson.incomeFromGenerationTariff),
                    parseInt(biogasJson.displayedHeatingCost),
                    parseInt(biogasJson.rhiPayment)
                ],
                [1.5,0,0,0,0,0,0,0]
     ];
}

function cashFlowData() {
     return [
               ['Year', 'Cash Flow'],
               [0,     parseInt(biogasJson.year0CashFlow)],
               [1,     parseInt(biogasJson.year1CashFlow)],
               [2,     parseInt(biogasJson.year2CashFlow)],
               [3,     parseInt(biogasJson.year3CashFlow)],
               [4,     parseInt(biogasJson.year4CashFlow)],
               [5,     parseInt(biogasJson.year5CashFlow)],
               [6,     parseInt(biogasJson.year6CashFlow)],
               [7,     parseInt(biogasJson.year7CashFlow)],
               [8,     parseInt(biogasJson.year8CashFlow)],
               [9,     parseInt(biogasJson.year9CashFlow)],
               [10,     parseInt(biogasJson.year10CashFlow)],
               [11,     parseInt(biogasJson.year11CashFlow)],
               [12,     parseInt(biogasJson.year12CashFlow)],
               [13,     parseInt(biogasJson.year13CashFlow)],
               [14,     parseInt(biogasJson.year14CashFlow)],
               [15,     parseInt(biogasJson.year15CashFlow)]
     ];
}


function sensitivityAnalysisData() {
     return [
               ['Sensitivity Table', 'Crop Yield', 'Electricity Price', 'Cost of Energy Crop'],
               [-10, parseFloat(biogasJson.cropYield_10), parseFloat(biogasJson.electricityPrice_10), parseFloat(biogasJson.costOfEnergyCrop_10) ],
               [-9, parseFloat(biogasJson.cropYield_9), parseFloat(biogasJson.electricityPrice_9), parseFloat(biogasJson.costOfEnergyCrop_9) ],
               [-8, parseFloat(biogasJson.cropYield_8), parseFloat(biogasJson.electricityPrice_8), parseFloat(biogasJson.costOfEnergyCrop_8) ],
               [-7, parseFloat(biogasJson.cropYield_7), parseFloat(biogasJson.electricityPrice_7), parseFloat(biogasJson.costOfEnergyCrop_7) ],
               [-6, parseFloat(biogasJson.cropYield_6), parseFloat(biogasJson.electricityPrice_6), parseFloat(biogasJson.costOfEnergyCrop_6) ],
               [-5, parseFloat(biogasJson.cropYield_5), parseFloat(biogasJson.electricityPrice_5), parseFloat(biogasJson.costOfEnergyCrop_5) ],
               [-4, parseFloat(biogasJson.cropYield_4), parseFloat(biogasJson.electricityPrice_4), parseFloat(biogasJson.costOfEnergyCrop_4) ],
               [-3, parseFloat(biogasJson.cropYield_3), parseFloat(biogasJson.electricityPrice_3), parseFloat(biogasJson.costOfEnergyCrop_3) ],
               [-2, parseFloat(biogasJson.cropYield_2), parseFloat(biogasJson.electricityPrice_2), parseFloat(biogasJson.costOfEnergyCrop_2) ],
               [-1, parseFloat(biogasJson.cropYield_1), parseFloat(biogasJson.electricityPrice_1), parseFloat(biogasJson.costOfEnergyCrop_1) ],
               [0, parseFloat(biogasJson.cropYield0), parseFloat(biogasJson.electricityPrice0), parseFloat(biogasJson.costOfEnergyCrop0) ],
               [1, parseFloat(biogasJson.cropYield1), parseFloat(biogasJson.electricityPrice1), parseFloat(biogasJson.costOfEnergyCrop1) ],
               [2, parseFloat(biogasJson.cropYield2), parseFloat(biogasJson.electricityPrice2), parseFloat(biogasJson.costOfEnergyCrop2) ],
               [3, parseFloat(biogasJson.cropYield3), parseFloat(biogasJson.electricityPrice3), parseFloat(biogasJson.costOfEnergyCrop3) ],
               [4, parseFloat(biogasJson.cropYield4), parseFloat(biogasJson.electricityPrice4), parseFloat(biogasJson.costOfEnergyCrop4) ],
               [5, parseFloat(biogasJson.cropYield5), parseFloat(biogasJson.electricityPrice5), parseFloat(biogasJson.costOfEnergyCrop5) ],
               [6, parseFloat(biogasJson.cropYield6), parseFloat(biogasJson.electricityPrice6), parseFloat(biogasJson.costOfEnergyCrop6) ],
               [7, parseFloat(biogasJson.cropYield7), parseFloat(biogasJson.electricityPrice7), parseFloat(biogasJson.costOfEnergyCrop7) ],
               [8, parseFloat(biogasJson.cropYield8), parseFloat(biogasJson.electricityPrice8), parseFloat(biogasJson.costOfEnergyCrop8) ],
               [9, parseFloat(biogasJson.cropYield9), parseFloat(biogasJson.electricityPrice9), parseFloat(biogasJson.costOfEnergyCrop9) ],
               [10, parseFloat(biogasJson.cropYield10), parseFloat(biogasJson.electricityPrice10), parseFloat(biogasJson.costOfEnergyCrop10) ]
     ];
}

function sensitivityTableData() {
     var decPlaces = 2;
     return [
               ['Percentage Change','-20%','-15%','-10%','-5%','0%','5%','10%','15%','20%'],
               ['Crop Yield',parseFloat(biogasJson.cropYield_20p).toFixed(decPlaces),parseFloat(biogasJson.cropYield_15p).toFixed(decPlaces),parseFloat(biogasJson.cropYield_10p).toFixed(decPlaces),parseFloat(biogasJson.cropYield_5p).toFixed(decPlaces),parseFloat(biogasJson.cropYield0p).toFixed(decPlaces),parseFloat(biogasJson.cropYield5p).toFixed(decPlaces),parseFloat(biogasJson.cropYield10p).toFixed(decPlaces),parseFloat(biogasJson.cropYield15p).toFixed(decPlaces),parseFloat(biogasJson.cropYield20p).toFixed(decPlaces)],
               ['Crop Yield Pay Back',parseFloat(biogasJson.cropYieldPayback_20p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback_15p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback_10p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback_5p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback0p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback5p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback10p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback15p).toFixed(decPlaces),parseFloat(biogasJson.cropYieldPayback20p).toFixed(decPlaces)],

               ['Crop Cost',parseFloat(biogasJson.cropCost_20p).toFixed(decPlaces),parseFloat(biogasJson.cropCost_15p).toFixed(decPlaces),parseFloat(biogasJson.cropCost_10p).toFixed(decPlaces),parseFloat(biogasJson.cropCost_5p).toFixed(decPlaces),parseFloat(biogasJson.cropCost0p).toFixed(decPlaces),parseFloat(biogasJson.cropCost5p).toFixed(decPlaces),parseFloat(biogasJson.cropCost10p).toFixed(decPlaces),parseFloat(biogasJson.cropCost15p).toFixed(decPlaces),parseFloat(biogasJson.cropCost20p).toFixed(decPlaces)],
               ['Crop Cost Pay Back',parseFloat(biogasJson.cropCostPayback_20p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback_15p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback_10p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback_5p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback0p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback5p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback10p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback15p).toFixed(decPlaces),parseFloat(biogasJson.cropCostPayback20p).toFixed(decPlaces)],

               ['Electricity Price',parseFloat(biogasJson.electricityPrice_20p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice_15p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice_10p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice_5p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice0p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice5p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice10p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice15p).toFixed(decPlaces),parseFloat(biogasJson.electricityPrice20p).toFixed(decPlaces)],
               ['Electricity Price Pay Back',parseFloat(biogasJson.electricityPricePayback_20p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback_15p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback_10p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback_5p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback0p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback5p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback10p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback15p).toFixed(decPlaces),parseFloat(biogasJson.electricityPricePayback20p).toFixed(decPlaces)],

               ['Heating Fuel Price',parseFloat(biogasJson.heatingFuelPrice_20p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice_15p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice_10p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice_5p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice0p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice5p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice10p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice15p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPrice20p).toFixed(decPlaces)],
               ['Heating FuelPrice Pay Back',parseFloat(biogasJson.heatingFuelPricePayback_20p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback_15p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback_10p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback_5p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback0p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback5p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback10p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback15p).toFixed(decPlaces),parseFloat(biogasJson.heatingFuelPricePayback20p).toFixed(decPlaces)]
     ];
}