import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";


function CustomizableViz() {
    return (
        <Fragment>
            <TopBar/>
            <h1 style={{ margin: 100 }}>
                Customizable Viz
            </h1>
        </Fragment>
    )
}

export default CustomizableViz;
