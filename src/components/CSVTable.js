import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import { CsvToHtmlTable } from "react-csv-to-table";
import dataCSV from "../files/CSV";
import {Box} from "@material-ui/core";

 

function CSVTable() {
    return (
        <Fragment>
           <Paper elevation={8}>
               <Box mt={15}/>
               <CsvToHtmlTable data={dataCSV} csvDelimiter=","/>
           </Paper>
        </Fragment>
    );
}

export default CSVTable;
