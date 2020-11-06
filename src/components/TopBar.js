import React, {Fragment} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import { Link} from "react-router-dom";
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
        textDecoration: 'none',
        color: "#ffffff",
        '&:hover': {
            textDecoration: 'none',
            color: "#ffffff",
        },
        '&:active': {
            textDecoration: 'none',
            color: "#ffffff",
        }
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

function TopBar() {

    const classes = useStyles();

    return (
        <Fragment>
            <AppBar position="fixed" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} component={ Link } to="/" >
                        Data Visualization Fall 2020 | Final Project | Lokesh Gangarmaney
                    </Typography>
                    <Button component={ Link } to="/heatmap" color="inherit" className={classes.menuButton}>Heatmap</Button>
                    <Button component={ Link } to="/piechart" color="inherit" className={classes.menuButton}>Pie Chart</Button>
                    <Button component={ Link } to="/barchartstate" color="inherit" className={classes.menuButton}>Bar Chart</Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default TopBar;
