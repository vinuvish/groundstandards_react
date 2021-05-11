import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Button, Link } from '@material-ui/core';
import ZFooter from '../../components/ZFooter';
import ZTextFormField from '../../components/ZTextFromField';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

interface Props { }

const ContactPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { handleSubmit, errors, control, getValues } = useForm<FormData>({ mode: 'onSubmit', reValidateMode: 'onChange' });
    const { enqueueSnackbar } = useSnackbar();
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    type FormData = {
        name: string;
        email: string;
        subject: string;
        message: string;
        question: string;


    };

    const onSubmit = handleSubmit(async (data: FormData) => {
        console.log('from', data);
        try {

            enqueueSnackbar('Email sent');
        } catch (error) {
            console.log(error);
            enqueueSnackbar(error.message);
        }
    });
    return (
        <>
            <div className={classes.cardContainer}>

                <Grid item xs={10} className={classes.grid}>
                    <Grid container justify="center" spacing={10}>
                        <Grid item>

                            <Typography variant='h6' >
                                <Box fontWeight={900} paddingTop={2}>
                                    HAVE A QUESTION?</Box>
                            </Typography>
                            <Typography variant='subtitle1' >
                                <Box fontWeight={300} paddingTop={2} width='300px' fontStyle='italic' color='grey'>
                                    For more information about the ground transportation products and services we offer, complete the form on this page or send an email to</Box>
                            </Typography>
                            <Link href="#" >
                                <Typography variant='h6' >
                                    <Box fontWeight={400} >
                                        info@groundstandards.com

</Box>
                                </Typography>
                            </Link>
                            <Typography variant='subtitle1' >
                                <Box fontWeight={300} paddingTop={2} width='300px' fontStyle='italic' color='grey'>
                                    We look forward to helping you.</Box>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' >
                                <Box fontWeight={900} paddingTop={2}>
                                    JOIN OUR MAILING LIST</Box>
                            </Typography>

                            <ZTextFormField
                                className={classes.textFormField}
                                variant='filled'
                                defaultValue={getValues().name}
                                error={errors.name}
                                rules={{ required: 'This is a required field.' }}
                                label='Name'
                                name='name'

                                control={control}
                            />
                            <ZTextFormField
                                className={classes.textFormField}
                                variant='filled'
                                defaultValue={getValues().email}
                                error={errors.email}
                                rules={{ required: 'Invalid email address', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
                                label='Email'
                                name='email'
                                control={control}
                            /> <ZTextFormField
                                className={classes.textFormField}
                                variant='filled'
                                defaultValue={getValues().subject}
                                error={errors.subject}
                                rules={{ required: 'This is a required field.' }}
                                label='Subject'
                                name='subject'
                                control={control}
                            />
                            <ZTextFormField
                                className={classes.textFormField}
                                variant='filled'
                                defaultValue={getValues().message}
                                error={errors.message}
                                rules={{ required: 'This is a required field.' }}
                                label='Message'
                                rows={5}
                                name='message'
                                control={control}
                            /><ZTextFormField
                                className={classes.textFormField}
                                variant='filled'
                                defaultValue={getValues().question}
                                error={errors.question}
                                rules={{ required: 'This is a required field.' }}
                                label='What is thirteen minus 6? *'
                                name='question'
                                control={control}
                            />
                            <Button type='submit' className={classes.submitButton} onClick={onSubmit} fullWidth variant='contained' color='primary' size='large'>
                                <Typography variant='h6' >
                                    Send
                       </Typography>
                            </Button>
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
            color: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW',
            height: '100%',
            padding: theme.spacing(10, 20),
            backgroundSize: "cover",
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/2015/02/banner-home.jpg)`,

        },
        textFormField: {
            width: 400,


        },
        submitButton: {
            height: '45px',
            background: 'grey',
            margin: '10px 0px'
        }, grid: {
            padding: '50px',
            justifyContent: 'center',
            alignItems: 'center',
        }, paper: {
            background: 'black',
            height: 500,
            width: 300,
        },

    })
);