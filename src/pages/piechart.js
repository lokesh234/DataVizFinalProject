import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";
import {useCities, sumArray} from "../data/useCities";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core/styles";
import { pie, arc } from "d3";
import FratPie from "../components/FratPie";
import Marks from "../components/Marks";
import SratPie from "../components/SratPie";


const useStyles = makeStyles((theme) => ({
    broot: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
}));

function PieChart() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(sumArray);

    const colorArray = ['#EF5411', '#FA5B0F', '#FF6517', '#FF822E', '#00B3E6',
        "#F4EDBD",
        '#B5A269', '#756944', '#999966', '#F5DB8E', '#B34D4D',
        '#B56748', '#75432F', '#F58C62', '#E6331A', '#33FFCC',];

    const data = pie().sort(null).value(function (d) {
        return d.Tuition
    })

    const pieArc = arc()
                    .innerRadius(0)
                    .outerRadius(200).padAngle(.05).padRadius(50);

    const betterArray = sumArray.filter(function (fl) {
        return fl.Tuition > 0;
    })

    const finalArray = [];

    betterArray.forEach(function (fl) {
        finalArray.push(fl.Tuition/betterArray.length)
    })

        return (
        <Fragment>
            <TopBar/>
            { value === 0 ? <FratPie/> : <SratPie/>}
            <Paper className={classes.broot}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Fraternity"/>
                    <Tab label="Sorority"/>
                </Tabs>
            </Paper>
        </Fragment>
    )
}

export default PieChart;
