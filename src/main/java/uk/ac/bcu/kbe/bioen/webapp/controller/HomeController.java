package uk.ac.bcu.kbe.bioen.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
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

    @RequestMapping(value="/hello",method = RequestMethod.GET)
    public String printHello(ModelMap model) {
        model.addAttribute("message", "Hello Spring MVC Framework!");

        return "hello";
    }

    @RequestMapping(value="/text",method = RequestMethod.GET)
    @ResponseBody
    public String printText() {
        return "hello";
    }




}
