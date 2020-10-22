import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";


function PieChart() {
    return (
        <Fragment>
            <TopBar/>
            <h1 style={{ margin: 100 }}>
                Pie Chart
            </h1>
        </Fragment>
    )
}

export default PieChart;
