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
                {"zeroGrazedCows","1","c6","number","input"},
                {"summerGrazedCows","1","c7","number","input"},
                {"maizeSilageArea","1","c8","number","input"},
                {"currentElectricityBill","1","c9","number","input"},
                {"heatingBillToBeDisplaced","1","c10","number","input"},

                // output
                {"capitalInvestment","3","d63","formula", "output"},
                {"electricityCapacity","3","d65","formula", "output"},
                {"simplePayback","4","k7","formula", "output"}

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
