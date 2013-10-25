package uk.ac.bcu.kbe.bioen.webapp.controller;

import com.google.common.collect.ArrayListMultimap;
import com.google.common.collect.Multimap;
import com.google.common.collect.Multimaps;
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

/**
 * Created with IntelliJ IDEA.
 * User: Krishna
 * Date: 12/10/13
 * Time: 11:00
 * To change this template use File | Settings | File Templates.
 */
@Controller

public class HomeController{
    private org.slf4j.Logger log = LoggerFactory.getLogger(this.getClass());

    private final String filename = this.getClass().getClassLoader().getResource("biogas-fit-calculator.xlsm").getFile();
    private final Multimap<Integer,String> sheetCells;
    private BiogasManager manager;

    public HomeController() throws IOException {
        manager = new BiogasManager(new ExcelReader(filename));
        sheetCells = getFormulaCells();
    }

    private Multimap<Integer,String> getFormulaCells() {
        Multimap<Integer,String> sheetCells = ArrayListMultimap.create();
        sheetCells = ArrayListMultimap.create();
        sheetCells.put(0, "d50");
        sheetCells.put(0, "d74");
        return  sheetCells;
    }

    @RequestMapping(value="/biogas-calculator",method = RequestMethod.GET)
    public String getBiogasCalculator(ModelMap model) {
        model.addAttribute("message", "Bio-Gas FIT Calculator");

        return "biogas-calculator";
    }

    @RequestMapping(value="/biogas-json",method = RequestMethod.POST)
    @ResponseBody
    public String getBiogasJson(@RequestBody String input) throws ParseException, IOException {
        log.info("input: "+ input);
        manager.setInput(input);
        manager.update(sheetCells);
        String output =  manager.getOutput();
        log.info("output: "+ output);
        return output;
    }




}
