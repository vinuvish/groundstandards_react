import { Tabs, Tab, Container, Grid, Link, makeStyles, Typography, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import ZTextFormField from './ZTextFromField';

export default function ZFooter() {
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
        email: string;
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
    function a11yProps(index: any) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container direction='row' >
                    <Grid item xs={4}>

                        <div className={classes.tab}>
                            <Tabs value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example">
                                <Tab label="Populer" {...a11yProps(0)} />
                                <Tab label="Recent" {...a11yProps(1)} />
                            </Tabs>

                        </div>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h5'>
                            JOIN OUR MAILING LIST
                       </Typography>
                        <ZTextFormField
                            variant='filled'
                            defaultValue={getValues().email}
                            error={errors.email}
                            rules={{ required: 'Invalid email address', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
                            label='Email'
                            name='email'
                            control={control}
                        />
                        <Button type='submit' className={classes.submitButton} onClick={onSubmit} fullWidth variant='contained' color='primary' size='large'>
                            <Typography variant='h5' >
                                Subscribe
                       </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h5' >
                            CONTECT US
                       </Typography>

                    </Grid>
                </Grid>


                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright ?? '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Ground Standards, LLC. All rights reserved.
                    </Link>
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Driver Verification Agreement and Privacy Policy
                </Typography>
            </Container>
        </footer >

    );

}
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100vW'
    },
    tab: {
        backgroundColor: theme.palette.background.paper,
        color: 'grey',
        width: 300,
        height: 300,
        border: '2px',
        variant: "scrollable"
    }, submitButton: {
        height: '45px',
        background: 'grey',
        margin: '10px 0px'
    },
}));
