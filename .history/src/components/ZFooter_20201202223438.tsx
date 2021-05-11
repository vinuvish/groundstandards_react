import { Tabs, Tab, Paper, Box, Container, Grid, Link, makeStyles, Typography, Button, CssBaseline } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import ZTextFormField from './ZTextFromField';
import ZTabPanel from './ZTabPanal';
import ZListCard from './ZListCard';


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
            <CssBaseline />
            <Grid item xs={12} className={classes.grid}>
                <Grid container justify="center" spacing={10}>
                    <Grid item>
                        <Box border={1}>
                            <Tabs value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example">
                                <Tab label="Populer" {...a11yProps(0)} />
                                <Tab label="Recent" {...a11yProps(1)} />
                            </Tabs>
                            <ZTabPanel value={value} index={0}>
                                <ZListCard />
                            </ZTabPanel>
                            <ZTabPanel value={value} index={1}>
                                <ZListCard />
                            </ZTabPanel>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' >
                            <Box fontWeight={900} paddingTop={2}>
                                JOIN OUR MAILING LIST</Box>
                        </Typography>

                        <ZTextFormField
                            className={classes.textFormField}
                            variant='filled'
                            defaultValue={getValues().email}
                            error={errors.email}
                            rules={{ required: 'Invalid email address', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
                            label='Email'
                            name='email'
                            control={control}
                        />
                        <Button type='submit' className={classes.submitButton} onClick={onSubmit} fullWidth variant='contained' color='primary' size='large'>
                            <Typography variant='h6' >
                                Subscribe
                       </Typography>
                        </Button>
                    </Grid>
                    <Grid item>

                        <Typography variant='h5' >
                            CONTECT US
                       </Typography>
                        <Typography variant='h6' >
                            <Box fontWeight={900} paddingTop={2}>
                                Email</Box>
                        </Typography>
                        <Link href="#" >
                            <Typography variant='h6' >
                                <Box fontWeight={400} >
                                    info@groundstandards.com

                                </Box>
                            </Typography>
                        </Link>
                        <Typography variant='h6' >
                            <Box fontWeight={900} paddingTop={2}>
                                Fax</Box>
                        </Typography>

                        <Typography variant='h6' >
                            <Box fontWeight={400} >
                                201-608-7577
                                </Box>
                        </Typography>


                    </Grid>
                </Grid>
            </Grid>

            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Ground Standards, LLC. All rights reserved.
                    </Link>
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                Driver Verification Agreement and Privacy Policy
                </Typography>

        </footer >

    );

}
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(10, 0),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100vW'
    },
    tab: {
        width: 350,

        border: 1,
        variant: "scrollable"
    },
    textFormField: {
        width: 300,
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
}));
