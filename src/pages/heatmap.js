import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";
import Marks from "../components/Marks";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {useCities, sumArray} from "../data/useCities";
import AppCards from "../components/AppCards";


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

function Heatmap() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const cities = useCities();


    console.log(cities);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (!cities) {
        return <pre> Loading... </pre>
    }


    const UsaCities = [];
    const joined = [];
    const didnotjoin = [];

    cities.forEach(c => {
        if(c['Home Country'] === 'United States'){
            UsaCities.push(c);
        }
    })

    const srats = []

    cities.map(c => {
        if ((c['Greek Council'] === 'Sorority')){
            srats.push(c['Greek Organization'])
        }})

    UsaCities.forEach(c => {
        if (!(c['Greek Council'] === 'None')){
            joined.push(c)
        }
        else {
            didnotjoin.push(c)
        }
    })

    const uniqueSrats = [ ...new Set(srats)]

    console.log(uniqueSrats)

    return (
        <Fragment>
            <TopBar/>
            { value === 0 ? <Marks cities={joined}/> : <Marks cities={didnotjoin}/>}
            <Paper className={classes.broot}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Joined Greek Life " />
                    <Tab label="Did not join Greek Life " />
                </Tabs>
            </Paper>
        </Fragment>
    )
}

export default Heatmap;
