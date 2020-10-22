import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";


function ScatterPlot() {
    return (
        <Fragment>
            <TopBar/>
            <h1 style={{ margin: 100 }}>
                Scatter Plot
            </h1>
        </Fragment>
    )
}

export default ScatterPlot;
