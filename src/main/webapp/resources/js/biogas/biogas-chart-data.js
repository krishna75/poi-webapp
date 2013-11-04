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
               ['15',     parseInt(biogasJson.year15CashFlow)],
     ];
}