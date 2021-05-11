import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();
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

                <Grid item xs={12}>

                </Grid>
            </Grid>

        </div>


    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vW',
        padding: theme.spacing(10, 20),
    }, grid: {
        padding: '50px',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;

