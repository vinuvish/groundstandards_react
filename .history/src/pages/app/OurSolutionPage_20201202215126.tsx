import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h2">
                <Box fontWeight={600} justifyContent='center' >
                    THE #1 SOLUTION
               </Box>
            </Typography>

        </div>


    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {

        width: '100vW',

        padding: theme.spacing(10, 20),
    }
}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;

