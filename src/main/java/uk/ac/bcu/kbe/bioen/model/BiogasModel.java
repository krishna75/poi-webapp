package uk.ac.bcu.kbe.bioen.model;

import com.google.common.collect.Maps;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 22/10/13
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */
public class BiogasModel {

    private org.slf4j.Logger log = LoggerFactory.getLogger(this.getClass());

    int numCows;
    int area;
    int biogas;
    int engergy;

    public BiogasModel() {
    }

    public BiogasModel(int numCows, int area, int biogas, int engergy) {
        this.numCows = numCows;
        this.area = area;
        this.biogas = biogas;
        this.engergy = engergy;
    }

    public BiogasModel(String jsonString) {


    }

    JSONObject stringToMap(String jsonString) throws ParseException {
        Map<String, String> map = Maps.newHashMap();
        JSONObject json = (JSONObject) new JSONParser().parse(jsonString);
        return json;
    }
}
