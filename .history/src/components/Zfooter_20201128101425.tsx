import { makeStyles } from '@material-ui/core';
import React from 'react';

export default function ZFooter() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}></footer>

    );

}
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));
