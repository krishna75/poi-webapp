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

    private final String filename = this.getClass().getClassLoader().getResource("biogas-fit-calculator.xlsm").getFile();
    private final String[][] variableCellMappings;
    private BiogasManager manager;

    public HomeController() throws IOException {
        variableCellMappings = createVariableCellMappings();
        manager = new BiogasManager(new ExcelReader(filename),variableCellMappings);
    }

    private String[][] createVariableCellMappings(){
        String[][] array = {
                {"cows","0","d4","number","input"},
                {"area","0","d5","number","input"},
                {"energy","0","d50","formula", "output"},
                {"biogas","0","d74","formula", "output"},
                {"cowSlurry","0","d7","number", "input"},
                {"cowDryMatter","0","d8","number", "input"},
                {"cowBiogas","0","d16","formula", "output"},
                {"cropYield","0","d18","number", "input"},
                {"cropDryMatter","0","d19","number", "input"},
                {"cropBiogas","0","d28","formula", "output"},
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
