import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Link, Container } from '@material-ui/core';

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
                <Grid container justify="center">
                    <Grid item xs={3}>
                        <Container fixed>

                            <Typography variant="h6"  >
                                <Box fontWeight={500} m={2} color='white'  >
                                    HAVE A QUESTION? </Box>
                                <Box fontWeight={200} m={2} color='white' fontStyle="italic" >
                                    For more information about the ground transportation products and services we offer, complete the form on this page or send an email to  </Box>

                            </Typography> <Link href="#" >
                                <Typography variant='h6' >
                                    <Box fontWeight={600} m={2}  >
                                        info@groundstandards.com

                                </Box>
                                </Typography>
                            </Link>
                            <Typography variant="h6"  >
                                <Box fontWeight={200} m={2} color='white' fontStyle="italic" >
                                    We look forward to helping you.</Box>

                            </Typography   >
                        </Container>


                    </Grid>


                </Grid>


                {/* <Typography variant="h6"  >
                            <Box fontWeight={500} m={2} color='white'  >
                                HAVE A QUESTION? </Box>
                            <Box fontWeight={200} m={2} color='white' fontStyle="italic" width="350px">
                                For more information about the ground transportation products and services we offer, complete the form on this page or send an email to  </Box>

                        </Typography> <Link href="#" >
                            <Typography variant='h6' >
                                <Box fontWeight={600} >
                                    info@groundstandards.com

                                </Box>
                            </Typography>
                        </Link>
                        <Typography variant="h6"  >
                            <Box fontWeight={200} m={2} color='white' fontStyle="italic" width="300px">
                                We look forward to helping you.</Box>

                        </Typography   > */}


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


    })
);