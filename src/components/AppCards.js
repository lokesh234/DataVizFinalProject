import React, {Fragment} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

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
    cardroot: {
        maxWidth: 1500,
        marginLeft: 200,
        marginTop: 100,
    },
}));

function AppCards() {

    const classes = useStyles();


    return (
        <Fragment>
            <Card className={classes.cardroot}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Greek Life At Duke
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The data was published by the Chronicle to analyze the trends between those and those who do not join Greek Life at Duke. With the help of Data Visualization, The Chronicle was able to find that "For example, almost 70 percent of men in Sigma Nu’s senior class are from New York, New Jersey or Connecticut. The majority of the class attended private high schools that charge more than $40,000 a year." (Chronicle, 2018). With the help of more data visualization tools, I was able to find these trends:
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                        - Trends to come after all visualizations are done
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" href="https://github.com/Chrissymbeck/Greek-Life-Demographics/">
                        Original Data Set
                    </Button>
                </CardActions>
            </Card>
        </Fragment>
    );
}

export default AppCards;
