import React, {Component, Fragment} from 'react';
import { HashRouter, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heatmap from "./pages/heatmap";
import CustomizableViz from "./pages/customizableviz";
import Barchartpage from "./pages/barchartpage";
import PieChart from "./pages/piechart";
import Barchartstate from "./pages/barchartstate";

export default class extends Component {
  render() {
    return (
        <Fragment>
            <HashRouter>
                <Route exact path="/"component={Home}/>
                <Route path="/Heatmap" component={Heatmap}/>
                <Route path="/piechart" component={PieChart}/>
                <Route path="/barchart" component={Barchartpage}/>
                <Route path="/customizableviz" component={CustomizableViz}/>
                <Route path="/barchartstate" component={Barchartstate} />
            </HashRouter>
        </Fragment>
    )
  }
}

