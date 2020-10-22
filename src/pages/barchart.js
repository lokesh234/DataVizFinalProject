import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";


function BarChart() {
    return (
        <Fragment>
            <TopBar/>
            <h1 style={{ margin: 100 }}>
                Bar Chart
            </h1>
        </Fragment>
    )
}

export default BarChart;
