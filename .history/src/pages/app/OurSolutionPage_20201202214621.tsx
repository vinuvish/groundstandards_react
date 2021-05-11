import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>


        </div>


    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;

