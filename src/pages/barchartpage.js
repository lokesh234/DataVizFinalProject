import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";
import BarChart from "../components/BarChart";
import {useCities} from "../data/useCities";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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
}));

function Barchartpage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
            { value === 0 ? <BarChart data={srats} state={props.location.United} /> : null}
            { value === 1 ? <BarChart data={frats} state={props.location.United} /> : null}
            { value === 2 ? <BarChart data={noaff} state={props.location.United} /> : null}
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

export default Barchartpage;
