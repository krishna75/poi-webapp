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
               ['Un-allocated',   parseInt(biogasJson.unAllocatedArea)]
     ];
}


function operatingCostData() {
     return [
               ['Operation', 'Cost (£/yr)'],
               ['Maintenance and Operation',     parseInt(biogasJson.maintenanceAndOperationCost)],
               ['Annual Energy Crop Cost',   parseInt(biogasJson.annualEnergyCropCost)],
               ['Value of Displayed Electricity',   parseInt(biogasJson.valueOfDispatchedElectricity)],
               ['Income from Export Tariff',   parseInt(biogasJson.incomeFromExportTariff)],
               ['Income from Generation Tariff',   parseInt(biogasJson.incomeFromGenerationTariff)],
               ['Displayed Heating Cost',   parseInt(biogasJson.displayedHeatingCost)],
               ['RHI Payment',   parseInt(biogasJson.rhiPayment)]

     ];
}

function cashFlowData() {
     return [
               ['Year', 'Cash Flow'],
               ['0',     parseInt(biogasJson.year0CashFlow)],
               ['1',     parseInt(biogasJson.year1CashFlow)],
               ['2',     parseInt(biogasJson.year2CashFlow)],
               ['3',     parseInt(biogasJson.year3CashFlow)],
               ['4',     parseInt(biogasJson.year4CashFlow)],
               ['5',     parseInt(biogasJson.year5CashFlow)],
               ['6',     parseInt(biogasJson.year6CashFlow)],
               ['7',     parseInt(biogasJson.year7CashFlow)],
               ['8',     parseInt(biogasJson.year8CashFlow)],
               ['9',     parseInt(biogasJson.year9CashFlow)],
               ['10',     parseInt(biogasJson.year10CashFlow)],
               ['11',     parseInt(biogasJson.year11CashFlow)],
               ['12',     parseInt(biogasJson.year12CashFlow)],
               ['13',     parseInt(biogasJson.year13CashFlow)],
               ['14',     parseInt(biogasJson.year14CashFlow)],
               ['15',     parseInt(biogasJson.year15CashFlow)]
     ];
}


function sensitivityAnalysisData() {
     return [
               ['Sensitivity Table', 'Crop Yield', 'Electricity Price', 'Cost of Energy Crop'],
               ['-10', parseInt(biogasJson.cropYield_10), parseInt(biogasJson.electricityPrice_10), parseInt(biogasJson.costOfEnergyCrop_10) ],
               ['-9', parseInt(biogasJson.cropYield_9), parseInt(biogasJson.electricityPrice_9), parseInt(biogasJson.costOfEnergyCrop_9) ],
               ['-8', parseInt(biogasJson.cropYield_8), parseInt(biogasJson.electricityPrice_8), parseInt(biogasJson.costOfEnergyCrop_8) ],
               ['-7', parseInt(biogasJson.cropYield_7), parseInt(biogasJson.electricityPrice_7), parseInt(biogasJson.costOfEnergyCrop_7) ],
               ['-6', parseInt(biogasJson.cropYield_6), parseInt(biogasJson.electricityPrice_6), parseInt(biogasJson.costOfEnergyCrop_6) ],
               ['-5', parseInt(biogasJson.cropYield_5), parseInt(biogasJson.electricityPrice_5), parseInt(biogasJson.costOfEnergyCrop_5) ],
               ['-4', parseInt(biogasJson.cropYield_4), parseInt(biogasJson.electricityPrice_4), parseInt(biogasJson.costOfEnergyCrop_4) ],
               ['-3', parseInt(biogasJson.cropYield_3), parseInt(biogasJson.electricityPrice_3), parseInt(biogasJson.costOfEnergyCrop_3) ],
               ['-2', parseInt(biogasJson.cropYield_2), parseInt(biogasJson.electricityPrice_2), parseInt(biogasJson.costOfEnergyCrop_2) ],
               ['-1', parseInt(biogasJson.cropYield_1), parseInt(biogasJson.electricityPrice_1), parseInt(biogasJson.costOfEnergyCrop_1) ],
               ['0', parseInt(biogasJson.cropYield0), parseInt(biogasJson.electricityPrice0), parseInt(biogasJson.costOfEnergyCrop0) ],
               ['1', parseInt(biogasJson.cropYield1), parseInt(biogasJson.electricityPrice1), parseInt(biogasJson.costOfEnergyCrop1) ],
               ['2', parseInt(biogasJson.cropYield2), parseInt(biogasJson.electricityPrice2), parseInt(biogasJson.costOfEnergyCrop2) ],
               ['3', parseInt(biogasJson.cropYield3), parseInt(biogasJson.electricityPrice3), parseInt(biogasJson.costOfEnergyCrop3) ],
               ['4', parseInt(biogasJson.cropYield4), parseInt(biogasJson.electricityPrice4), parseInt(biogasJson.costOfEnergyCrop4) ],
               ['5', parseInt(biogasJson.cropYield5), parseInt(biogasJson.electricityPrice5), parseInt(biogasJson.costOfEnergyCrop5) ],
               ['6', parseInt(biogasJson.cropYield6), parseInt(biogasJson.electricityPrice6), parseInt(biogasJson.costOfEnergyCrop6) ],
               ['7', parseInt(biogasJson.cropYield7), parseInt(biogasJson.electricityPrice7), parseInt(biogasJson.costOfEnergyCrop7) ],
               ['8', parseInt(biogasJson.cropYield8), parseInt(biogasJson.electricityPrice8), parseInt(biogasJson.costOfEnergyCrop8) ],
               ['9', parseInt(biogasJson.cropYield9), parseInt(biogasJson.electricityPrice9), parseInt(biogasJson.costOfEnergyCrop9) ],
               ['10', parseInt(biogasJson.cropYield10), parseInt(biogasJson.electricityPrice10), parseInt(biogasJson.costOfEnergyCrop10) ]
     ];
}