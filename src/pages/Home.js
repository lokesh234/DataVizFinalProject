import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CSVTable from "../components/CSVTable";
import TopBar from "../components/TopBar";
import AppCards from "../components/AppCards";
import {useCities} from "../data/useCities";
import READMe from "../components/ReadMe";

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

function Home() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <TopBar/>
            { value === 0 ? <READMe/> : null}
            { value === 1 ? <AppCards/> : null}
            { value === 2 ? <CSVTable/> : null}
            <Box mt={20}/>
            <Paper className={classes.broot}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Project" />
                    <Tab label="About the Data" />
                    <Tab label="Raw Data" />
                </Tabs>
            </Paper>
        </Fragment>
    );
}

export default Home;
