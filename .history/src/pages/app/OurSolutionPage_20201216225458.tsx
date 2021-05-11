import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, Grid, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import ZImageDisplay from '../../components/ZImageDisplay';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Grid container className={classes.grid} direction='column'>
                    <Grid item xs={12}>
                        <Typography variant="h2">
                            <Box fontWeight={600} justifyContent='center' >
                                THE #1 SOLUTION
               </Box>
                        </Typography>
                    </Grid>

                </Grid >

                <Grid container className={classes.grid} direction='row'>

                    <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/compliance.png'} />


                    <Grid item xs={3}>
                        <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/duty-of-care.png'} />
                    </Grid>
                    <Grid item xs={3}>
                        <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/rider-confidence.png'} />
                    </Grid>
                </Grid>


                <Grid container className={classes.grid} direction='row'>

                    <Grid item md={6}>
                        <ZImageDisplay classesName={classes.image} imageUral={'http://groundstandards.com/wp-content/uploads/the-only-3rd-party-audit-program-check900x118-800x105.png'} />
                    </Grid>
                    <Grid item xs={3}>
                        <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/check-yes-and-no-green400x370.png'} />
                    </Grid>

                </Grid>

            </div >
            <div className={classes.card2}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Grid container justify="center" >

                            <Grid item md={3}>
                                <ZImageDisplay classesName={classes.image} imageUral={'http://groundstandards.com/wp-content/uploads/computer-check-300x251.png'} />
                            </Grid>
                            <Grid item xs={3}>
                                <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/survey-check-300x200.png'} />
                            </Grid>
                            <Grid item xs={3}>
                                <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/responsibility1-400x266.jpg'} />
                            </Grid>
                            <Grid item xs={3}>
                                <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/PhonePicture1a-400x300.jpg'} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        </div>

    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vW',
        padding: theme.spacing(10, 20),
        background: 'white'
    }, grid: {
        padding: '50px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        maxWidth: 600,
        transition: "transform 0.50s ease-in-out"
    }
    slideImage: {
        maxWidth: 600,
        transition: "transform 0.50s ease-in-out"
    }
    , card2: {
        backgroundColor: 'black',


    },
}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;

