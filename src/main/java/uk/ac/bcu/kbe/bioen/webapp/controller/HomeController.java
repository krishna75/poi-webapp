package uk.ac.bcu.kbe.bioen.webapp.controller;

import com.google.common.collect.*;
import org.json.simple.parser.ParseException;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import uk.ac.bcu.kbe.bioen.dao.ExcelReader;
import uk.ac.bcu.kbe.bioen.service.BiogasManager;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Krishna
 * Date: 12/10/13
 * Time: 11:00
 * To change this template use File | Settings | File Templates.
 */
@Controller

public class HomeController {
    private org.slf4j.Logger log = LoggerFactory.getLogger(this.getClass());

    private final String filename = this.getClass().getClassLoader().getResource("biogas-fit-calculator-v1.0.xlsm").getFile();
    private final String[][] variableCellMappings;
    private BiogasManager manager;

    public HomeController() throws IOException {
        variableCellMappings = createVariableCellMappings();
        manager = new BiogasManager(new ExcelReader(filename),variableCellMappings);
    }

    private String[][] createVariableCellMappings(){
        String[][] array = {

                // input
                {"zeroGrazedCows","0","b3","number","input"},
                {"summerGrazedCows","0","b4","number","input"},
                {"maizeSilageArea","0","b13","number","input"},
                {"currentElectricityBill","1","c10","number","input"},
                {"heatingBillToBeDisplaced","1","c11","number","input"},

                // output
                {"capitalInvestment","1","c13","formula", "output"},
                {"electricityCapacity","1","c14","formula", "output"},
                {"simplePayback","1","c15","formula", "output"},

                //pie chart: farm area
                {"permanentPastureArea","0","b11","number", "output"},
                {"unAllocatedArea","0","b23","formula", "output"},

                //stack chart: Operation Costs
                {"maintenanceAndOperationCost","3","f102","formula", "output"},
                {"annualEnergyCropCost","3","f103","formula", "output"},
                {"annualEnergyCropCost","3","f103","formula", "output"},
                {"valueOfDispatchedElectricity","3","e85","formula", "output"},
                {"incomeFromExportTariff","3","e84","formula", "output"},
                {"incomeFromGenerationTariff","3","e83","formula", "output"},
                {"displayedHeatingCost","3","e93","formula", "output"},
                {"rhiPayment","3","e92","formula", "output"},

                //area chart:
                {"year0CashFlow","3","f112","formula", "output"},
                {"year1CashFlow","3","f113","formula", "output"},
                {"year2CashFlow","3","f114","formula", "output"},
                {"year3CashFlow","3","f115","formula", "output"},
                {"year4CashFlow","3","f116","formula", "output"},
                {"year5CashFlow","3","f117","formula", "output"},
                {"year6CashFlow","3","f118","formula", "output"},
                {"year7CashFlow","3","f119","formula", "output"},
                {"year8CashFlow","3","f120","formula", "output"},
                {"year9CashFlow","3","f121","formula", "output"},
                {"year10CashFlow","3","f122","formula", "output"},
                {"year11CashFlow","3","f123","formula", "output"},
                {"year12CashFlow","3","f124","formula", "output"},
                {"year13CashFlow","3","f125","formula", "output"},
                {"year14CashFlow","3","f126","formula", "output"},
                {"year15CashFlow","3","f127","formula", "output"},

                //line chart: sensitivity analysis
                // crop yield
                {"cropYield_10","4","k27","formula", "output"},
                {"cropYield_9","4","k28","formula", "output"},
                {"cropYield_8","4","k29","formula", "output"},
                {"cropYield_7","4","k30","formula", "output"},
                {"cropYield_6","4","k31","formula", "output"},
                {"cropYield_5","4","k32","formula", "output"},
                {"cropYield_4","4","k33","formula", "output"},
                {"cropYield_3","4","k34","formula", "output"},
                {"cropYield_2","4","k35","formula", "output"},
                {"cropYield_1","4","k36","formula", "output"},
                {"cropYield0","4","k37","formula", "output"},
                {"cropYield1","4","k38","formula", "output"},
                {"cropYield2","4","k39","formula", "output"},
                {"cropYield3","4","k40","formula", "output"},
                {"cropYield4","4","k41","formula", "output"},
                {"cropYield5","4","k42","formula", "output"},
                {"cropYield6","4","k43","formula", "output"},
                {"cropYield7","4","k44","formula", "output"},
                {"cropYield8","4","k45","formula", "output"},
                {"cropYield9","4","k46","formula", "output"},
                {"cropYield10","4","k47","formula", "output"},

                //electricity price
                {"electricityPrice_10","4","o27","formula", "output"},
                {"electricityPrice_9","4","o28","formula", "output"},
                {"electricityPrice_8","4","o29","formula", "output"},
                {"electricityPrice_7","4","o30","formula", "output"},
                {"electricityPrice_6","4","o31","formula", "output"},
                {"electricityPrice_5","4","o32","formula", "output"},
                {"electricityPrice_4","4","o33","formula", "output"},
                {"electricityPrice_3","4","o34","formula", "output"},
                {"electricityPrice_2","4","o35","formula", "output"},
                {"electricityPrice_1","4","o36","formula", "output"},
                {"electricityPrice0","4","o37","formula", "output"},
                {"electricityPrice1","4","o38","formula", "output"},
                {"electricityPrice2","4","o39","formula", "output"},
                {"electricityPrice3","4","o40","formula", "output"},
                {"electricityPrice4","4","o41","formula", "output"},
                {"electricityPrice5","4","o42","formula", "output"},
                {"electricityPrice6","4","o43","formula", "output"},
                {"electricityPrice7","4","o44","formula", "output"},
                {"electricityPrice8","4","o45","formula", "output"},
                {"electricityPrice9","4","o46","formula", "output"},
                {"electricityPrice10","4","o47","formula", "output"},

                // cost of energy crop
                {"costOfEnergyCrop_10","4","m27","formula", "output"},
                {"costOfEnergyCrop_9","4","m28","formula", "output"},
                {"costOfEnergyCrop_8","4","m29","formula", "output"},
                {"costOfEnergyCrop_7","4","m30","formula", "output"},
                {"costOfEnergyCrop_6","4","m31","formula", "output"},
                {"costOfEnergyCrop_5","4","m32","formula", "output"},
                {"costOfEnergyCrop_4","4","m33","formula", "output"},
                {"costOfEnergyCrop_3","4","m34","formula", "output"},
                {"costOfEnergyCrop_2","4","m35","formula", "output"},
                {"costOfEnergyCrop_1","4","m36","formula", "output"},
                {"costOfEnergyCrop0","4","m37","formula", "output"},
                {"costOfEnergyCrop1","4","m38","formula", "output"},
                {"costOfEnergyCrop2","4","m39","formula", "output"},
                {"costOfEnergyCrop3","4","m40","formula", "output"},
                {"costOfEnergyCrop4","4","m41","formula", "output"},
                {"costOfEnergyCrop5","4","m42","formula", "output"},
                {"costOfEnergyCrop6","4","m43","formula", "output"},
                {"costOfEnergyCrop7","4","m44","formula", "output"},
                {"costOfEnergyCrop8","4","m45","formula", "output"},
                {"costOfEnergyCrop9","4","m46","formula", "output"},
                {"costOfEnergyCrop10","4","m47","formula", "output"}

        };
        return array;
    }


    @RequestMapping(value = "/biogas-calculator", method = RequestMethod.GET)

    public String getBiogasCalculator(ModelMap model) {
        model.addAttribute("message", "Bio-Gas FIT Calculator");

        return "biogas-calculator";
    }

    @RequestMapping(value = "/biogas-json", method = RequestMethod.POST)
    @ResponseBody
    public String getBiogasJson(@RequestBody String input) throws ParseException, IOException {
        log.info("input: " + input);
        manager.setInput(input);
        manager.update();
        String output = manager.getOutput();
        log.info("output: " + output);
        return output;
    }


}
