package uk.ac.bcu.kbe.bioen.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
public class HomeController {
    private Logger log = Logger.getLogger(this.getClass().getName());

    String message = "This is a test message";

    @RequestMapping("/hello")
    public String showMessage() {
        log.info("from controller");
        return  message;
    }



}
