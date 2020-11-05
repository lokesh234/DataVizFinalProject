import {Link} from "react-router-dom";
import './barchart.css';
import React, {Fragment, useState } from "react";
import TopBar from "../components/TopBar";
import BarChart from "../components/BarChart";
import {useCities} from "../data/useCities";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Dropdown } from "../components/Dropdown";
import { options } from '../components/Options';
import Typography from "@material-ui/core/Typography";
import AppCards from "../components/AppCards";
import CSVTable from "../components/CSVTable";

const useStyles = makeStyles((theme) => ({
    broot: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    bar: {
        width: '100%',
        backgroundColor: '#000000'
    },
    media: {
        height: 140,
    },
    cardroot: {
        maxWidth: 345,
    },
    typography: {
        marginTop: 300,
    }
}));

const initialValue = 'Alabama';

function Barchartstate(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [selectedValue, setSelectedValue] = useState(initialValue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const cities = useCities();

    const frats = [];
    const srats = [];
    const noaff = [];


    if (!cities) {
        return <pre> Loading... </pre>
    }


    cities.forEach(function (d) {
        if (d['Greek Council'] === 'Fraternity'){
            frats.push(d)
        }
        else if (d['Greek Council'] === 'Sorority'){
            srats.push(d)
        }
        else {
            noaff.push(d);
        }
    })

    return (
        <Fragment>
            <TopBar/>
            <div className={"Outer"}>
            <div className={"drop"}>
            <h1> Choose a state : </h1>
            </div>
                <div className={"drop"}>
            <Dropdown
                options={options}
                id="state-select"
                selectedValue={selectedValue}
                onSelectedValueChange={setSelectedValue}/>
                </div>
            </div>

            {/*<div className={"text"}>*/}
            {/*    <h1>{selectedValue}</h1>*/}
            {/*</div>*/}


            { value === 0 ? <BarChart data={srats} state={selectedValue} /> : null}
            { value === 1 ? <BarChart data={frats} state={selectedValue} /> : null}
            { value === 2 ? <BarChart data={noaff} state={selectedValue} /> : null}


            <Paper className={classes.broot}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Sorority" />
                    <Tab label="Fraternity" />
                    <Tab label="No Affiliation" />
                </Tabs>
            </Paper>
        </Fragment>
    )
}

export default Barchartstate;
