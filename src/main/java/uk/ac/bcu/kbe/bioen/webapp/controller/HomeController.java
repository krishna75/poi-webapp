package uk.ac.bcu.kbe.bioen.webapp.controller;

import com.google.gson.Gson;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.logging.Logger;

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

    @RequestMapping(value="/biogas-calculator",method = RequestMethod.GET)
    public String printHello(ModelMap model) {
        model.addAttribute("message", "Bio-Gas FIT Calculator");

        return "biogas-calculator";
    }

    @RequestMapping(value="/biogas-json",method = RequestMethod.POST)
    @ResponseBody
    public String printText(@RequestBody String json) {
        log.info(json);
        return json;
    }




}
