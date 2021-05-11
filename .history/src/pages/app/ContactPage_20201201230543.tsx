import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Link, Container } from '@material-ui/core';
import ZTextFormField from '../../components/ZTextFromField';
import { useForm } from 'react-hook-form';

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
    const { handleSubmit, errors, control, getValues } = useForm<FormData>({ mode: 'onSubmit', reValidateMode: 'onChange' });

    return (
        <>
            <div className={classes.cardContainer}>
                <Grid container justify="center">
                    <Grid item xs={2}>

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



                    </Grid>
                    <Grid item xs={6}>

                        <Typography variant="h6"  >
                            <Box fontWeight={500} m={2} color='white'  >
                                Contact Form </Box>
                        </Typography>

                        <ZTextFormField
                            className={classes.formItem}
                            variant='standard'

                            defaultValue={getValues().email}
                            error={errors.email}
                            rules={{ required: 'Invalid email address', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
                            label='Email'
                            name='email'
                            control={control}
                        />


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
        formItem: {
            margin: '20px 0px',
            color: 'grey',
            backgroundColor: 'grey',



        },


    })
);