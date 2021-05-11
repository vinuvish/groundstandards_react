import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, Grid, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import ZImageDisplay from '../../components/ZImageDisplay';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        raised: false,
        shadow: 1,
    })
    return (
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


                <Grid item md={3}>
                    <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/compliance.png'} />
                </Grid>
                <Grid item xs={3}>
                    <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/duty-of-care.png'} />
                </Grid>
                <Grid item xs={3}>
                    <ZImageDisplay imageUral={'http://groundstandards.com/wp-content/uploads/rider-confidence.png'} />
                </Grid>
            </Grid>

        </div >


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

}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;
