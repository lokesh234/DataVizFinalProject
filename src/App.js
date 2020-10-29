import React, {Component, Fragment} from 'react';
import { HashRouter, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heatmap from "./pages/heatmap";
import CustomizableViz from "./pages/customizableviz";
import Barchartpage from "./pages/barchartpage";
import ScatterPlot from "./pages/scatterplot";
import PieChart from "./pages/piechart";

export default class extends Component {
  render() {
    return (
        <Fragment>
            <HashRouter>
                <Route exact path="/"component={Home}/>
                <Route path="/Heatmap" component={Heatmap}/>
                <Route path="/piechart" component={PieChart}/>
                <Route path="/scatterplot" component={ScatterPlot}/>
                <Route path="/barchart" component={Barchartpage}/>
                <Route path="/customizableviz" component={CustomizableViz}/>
            </HashRouter>
        </Fragment>
    )
  }
}

