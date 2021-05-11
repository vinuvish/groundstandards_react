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
                            <Typography variant="h5"  >
                                <Box fontWeight={300} m={5} color='white' fontStyle="italic" >
                                    “Ground Standards will revolutionize corporate ground transportation safety standards” </Box>
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
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/2015/02/banner-home.jpg)`,

        },

    })
);