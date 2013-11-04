/* for pie chart */
function livestockData() {
     console.log("zero grazed cows := " + biogasJson.zeroGrazedCows );
     return [
               ['Livestock', 'Biomass'],
               ['Zero Grazed Cows',     parseInt(biogasJson.zeroGrazedCows)],
               ['Summer Grazed Cows',   parseInt(biogasJson.summerGrazedCows)]
             ];
}