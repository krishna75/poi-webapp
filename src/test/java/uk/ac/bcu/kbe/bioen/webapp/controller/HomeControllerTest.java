package uk.ac.bcu.kbe.bioen.webapp.controller;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 23/10/13
 * Time: 14:45
 * To change this template use File | Settings | File Templates.
 */
public class HomeControllerTest {

    @Test
    public void testGetBiogasJson() throws Exception {
       HomeController controller = new HomeController();
        String output = controller.getBiogasJson("{\"zeroGrazedCows\":\"20\",\"summerGrazedCows\":\"20\"}");
        assertEquals("{\"summerGrazedCows\":20,\"zeroGrazedCows\":20,\"electricityCapacity\":121,\"maizeSilageArea\":840,\"currentElectricityBill\":64,\"simplePayback\":7,\"heatingBillToBeDisplaced\":2554,\"capitalInvestment\":935444}", output);

    }
}
