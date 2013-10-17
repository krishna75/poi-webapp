package uk.ac.bcu.kbe.bioen.model;


import com.google.common.collect.Lists;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;


/**
* Created with IntelliJ IDEA.
* User: ID118320
* Date: 11/10/13
* Time: 12:10
* To change this template use File | Settings | File Templates.
*/

public class ExcelReader {
    private Logger log = LoggerFactory.getLogger(this.getClass());
    private final XSSFWorkbook workbook;

    public ExcelReader(String filename) throws IOException {
        workbook = process(filename);
    }

    XSSFWorkbook process(String filename) throws IOException {
        FileInputStream file = new FileInputStream(new File(filename));
        return new XSSFWorkbook(file);
    }


    public List<String> getRowValues(int sheetIndex, int rowIndex) {
        List<String>  rowValues = Lists.newArrayList();

        XSSFSheet sheet = workbook.getSheetAt(sheetIndex);
        Row row = sheet.getRow(rowIndex);
        Iterator<Cell> cellIterator = row.cellIterator();
        while (cellIterator.hasNext()) {
            Cell cell = cellIterator.next();
            rowValues.add(getValue(cell));
        }
        return rowValues;
    }

    public String getCellValue(int sheetIndex, int rowIndex, int columnIndex) {
        XSSFSheet sheet = workbook.getSheetAt(sheetIndex);
        Cell cell = sheet.getRow(rowIndex).getCell(columnIndex);
        return  getValue(cell);
    }

    public String getCellValue(int sheetIndex, String cellId) {
        String[] splittedId = splitCellId(cellId);
        int row = Integer.parseInt(splittedId[1]);
        int col = convertLettersToInteger(splittedId[0]);
        return getCellValue(sheetIndex, row, col);
    }

    String[] splitCellId(String cellId) {
        return  cellId.split("(?<=\\p{L})(?=\\d)") ;
    }

     int convertLettersToInteger(String letters) {
        int index = 0;
        char[] alphabets = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        char[] chars = letters.toLowerCase().toCharArray();

        int count = 0;
        for (char aChar : chars) {
            for (int i = 0; i < 26; i++) {
                if (aChar == alphabets[i]) {
                    index = index + count + i;
                }
            }
            count += 26;
        }
        return index;
    }

    private String getValue(Cell cell) {
        String cellValue = "";
        if (cell != null) {
            switch (cell.getCellType()) {
                case Cell.CELL_TYPE_NUMERIC:
                   cellValue= String.valueOf(cell.getNumericCellValue());
                    break;
                case Cell.CELL_TYPE_STRING:
                    cellValue = cell.getStringCellValue();
                    break;
            }
        }
        return cellValue;
    }
}
