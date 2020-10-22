import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import TopBar from "../components/TopBar";
import Marks from "../components/Marks";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {useCities} from "../data/useCities";


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

    return (
        <Fragment>
            <TopBar/>
                <Marks cities={cities} />
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
