import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h1">
                THE #1 SOLUTION
            </Typography>

        </div>


    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
    }
}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;

