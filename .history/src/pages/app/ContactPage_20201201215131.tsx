import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, InputLabel, FormControl, Input, InputAdornment } from '@material-ui/core';

interface Props { }
const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
});
const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
};

const ContactPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.cardContainer}>


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
                        <FormControl fullWidth className={classes.form}>
                            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </FormControl>
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW',
            height: '1000px',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/2015/02/banner-home.jpg)`,

        },
        form: {
            margin: theme.spacing(1),
            width: '25ch',
        }

    })
);