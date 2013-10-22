package uk.ac.bcu.kbe.bioen.model;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 22/10/13
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */
public class BiogasModel {
    int numCows;
    int area;
    int biogas;
    int engergy;

    public BiogasModel(int numCows, int area, int biogas, int engergy) {
        this.numCows = numCows;
        this.area = area;
        this.biogas = biogas;
        this.engergy = engergy;
    }


}
