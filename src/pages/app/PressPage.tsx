import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';

interface Props { }

const PressPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <Grid>
            <div className={classes.card1}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Typography variant="h4"
                            component="h4" align="center">
                            <Box fontWeight={700} m={5} color='white' >
                                Ground Standards PRESS Page: COMING SOON</Box>
                        </Typography>

                    </Grid>
                    <Grid item xs={1} alignContent='center'>
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6"
                            component="h4" align="center">
                            <Box fontWeight={100} m={5} color='white' >
                                Keeping you up with Ground Standards latest News and our ever changing industry.</Box>
                        </Typography>
                    </Grid>
                </Grid>
            </div >
            <div className={classes.card2}>
                <Grid container className={classes.grid} direction='row'>
                    <Grid item xs={12}>
                        <Typography variant="h4"
                            component="h4" align="center">
                            <Box fontWeight={700} m={5} color='white' >
                                LET’S WORK TOGETHER</Box>
                        </Typography>

                    </Grid>
                    <Grid item xs={1} alignContent='center'>
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6"
                            component="h4" align="center">
                            <Box fontWeight={100} m={5} color='white' >
                                We work as a single united team with market leading firms around the world and give our clients the highest quality advice possible.</Box>
                        </Typography>

                    </Grid>
                    <Grid item >
                        <Button size="large" variant='contained' className={classes.button2} >GET IN TOUCH</Button>
                    </Grid>
                </Grid>
            </div >
        </Grid >
    )
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    card1: {
        paddingTop: '5%',
        backgroundImage: `url(http://groundstandards.com/wp-content/uploads/green-people3.jpg)`,

    }, card2: {
        paddingTop: '10%',
        paddingBottom: '10%',
        backgroundImage: `url(http://groundstandards.com/wp-content/uploads/2015/02/where-we-work-parallax.jpg)`,
    },
    gridWraper: {
        textAlign: 'center',
    }, grid: {
        padding: '50px',
        justifyContent: 'center',
        alignItems: 'center',
    }, button2: {
        backgroundColor: '#013220',
        color: 'white',
        width: '200px',
        maxWidth: '300px',
        maxHeight: '50px',
        minWidth: '100px',
        minHeight: '50px',


    }, divider: {

        background: 'white',
    }
}));

PressPage.defaultProps = {};

export default PressPage;

