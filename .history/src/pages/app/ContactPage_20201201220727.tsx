import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Link } from '@material-ui/core';

interface Props { }


type FormData = {
    name: string;
    email: string;
    subject: string;
    question: string;
    Message: string;



};
const ContactPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.cardContainer}>
                <Grid className={classes.root} container>
                    <Grid className={classes.leftContainer} item md={6}>
                        <Typography variant="h6"  >
                            <Box fontWeight={500} m={2} color='white'  >
                                HAVE A QUESTION? </Box>
                            <Box fontWeight={200} m={2} color='white' fontStyle="italic" width="300px">
                                For more information about the ground transportation products and services we offer, complete the form on this page or send an email to  </Box>
                            <Link href="#" >
                                <Typography variant='h6' >
                                    <Box fontWeight={400} >
                                        info@groundstandards.com

                                </Box>
                                </Typography>
                            </Link>
                        </Typography>  </Grid>


                </Grid>
                {/* 
                <Grid container spacing={3}>
                    <Grid item xs justify='flex-end'>
                        <Typography variant="h6"  >
                            <Box fontWeight={500} m={2} color='white'  >
                                HAVE A QUESTION? </Box>
                            <Box fontWeight={200} m={2} color='white' fontStyle="italic" width="300px">
                                For more information about the ground transportation products and services we offer, complete the form on this page or send an email to  </Box>

                        </Typography>
                    </Grid>
                    <Grid item xs justify='flex-start'>

                    </Grid>

                </Grid> */}




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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW',
            height: '1000px',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/2015/02/banner-home.jpg)`,

        },
        root: {
            fontStyle: 'italic'
        },
        leftContainer: {
            display: 'none',
            [theme.breakpoints.up('md')]: {

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'top',
                padding: '10px'
            }
        },
    })
);