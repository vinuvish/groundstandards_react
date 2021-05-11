import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

interface Props { }

const ContactPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (

        <div className={classes.cardContainer}>
            <h1>sadddddddd</h1>
        </div>

    );
};
ContactPage.defaultProps = {};

export default ContactPage;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/2015/02/banner-home.jpg)`,

        },

    })
);