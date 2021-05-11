import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

interface Props { }

const ContactPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.cardContainer}>
                <Grid container direction='row'>
                    <Grid item xs={4}>
                        <Grid container justify="center" spacing={10}>

                            <Typography variant="h6"  >
                                <Box fontWeight={500} m={5} color='white' paddingTop='20vH' >
                                    HAVE A QUESTION? </Box>
                            </Typography>
                            <Typography variant="h6"  >
                                <Box fontWeight={300} m={5} color='white' fontStyle="italic" width="5vH" >
                                    For more information about the ground transportation products and services we offer, complete the form on this page or send an email to  </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};
ContactPage.defaultProps = {};

export default ContactPage;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardContainer: {
            flex: 1,
            paddingTop: '20vH',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW',
            height: '1000px',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/2015/02/banner-home.jpg)`,

        },

    })
);