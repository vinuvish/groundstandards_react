import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, Grid, Typography, CardActionArea, CardMedia } from '@material-ui/core';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        raised: false,
        shadow: 1,
    })
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid} direction='column'>
                <Grid item xs={12}>
                    <Typography variant="h2">
                        <Box fontWeight={600} justifyContent='center' >
                            THE #1 SOLUTION
               </Box>
                    </Typography>
                </Grid>


            </Grid>

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
        </div>


    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vW',
        padding: theme.spacing(10, 20),
    }, grid: {
        padding: '50px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        maxWidth: 310,
        transition: "transform 0.50s ease-in-out"
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 2)"
    },

}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;

