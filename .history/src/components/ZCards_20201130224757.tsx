import { Box, createStyles, Grid, makeStyles, Theme, Typography, Button } from '@material-ui/core';
import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import ZCardItem from './ZCardItem';
const cardContants = [
    { title: 'What We Do', name: 'card1', body: 'We provide the ground transportation industry’s ONLY, independent 3rd party audit certification and data management product for full transparency of the driver, insurance and vehicle provided by your service provider.', path: '/aboutUs' },
    { title: 'Who We Are', name: 'card2', body: 'We are a group of travel industry professionals from various backgrounds. Our leadership team is comprised of limousine, corporate travel, IT, logistics and financial industry sectors. With nearly 25 years of experience respectively in these areas, the team brings a foundation of creditability, sustainability, reliability and trustworthiness to the industry and GTS.', path: '/aboutUs' },
    { title: 'Why We Do It', name: 'card3', body: 'We believe that safety and Duty of Care should never be compromised when traveling. Why would you get off a $50 million airplane, the safest form of travel and into a vehicle you know nothing about and more importantly, driven by someone whose credentials and validity you know nothing about? Because of this, we’ve developed a comprehensive driver registration product based on the rigor, safety, training and background check protocols utilized in the aviation industry. We then applied them to the ground transportation industry.', path: '/aboutUs' }
]

const favAvetarContants = [
    { title: 'A GLOBAL VIEW', fabIcon: 'fa fa-globe ' },
    { title: 'TRANSPORTATION\nEXPERTS', fabIcon: 'fa fa-road' },
    { title: 'CLIENT FOCUS', fabIcon: 'fa fa-newspaper-o' },
    { title: 'LOCAL KNOWLEDGE', fabIcon: 'fa fa-check' },]

function ZCards() {
    const classes = useStyles();
    return (

        <div className={classes.cardContainer}>
            <div className={classes.card1}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={10}>
                            {cardContants.map(({ title, body, path }) => (
                                <Grid key={title} item>
                                    <ZCardItem title={title} body={body} path={path} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </div >
            <div className={classes.card2}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={10}>
                            {favAvetarContants.map(({ title, fabIcon }) => (
                                <Grid key={title} item className={classes.gridWraper}>
                                    <Box borderRadius="50%" display="flex" justifyContent="center" className={classes.iconContainer} {...defaultProps} >
                                        <FaGlobe size='4em' color={"#00ff33"} />
                                    </Box>
                                    <Typography display="inline" className={classes.title} gutterBottom>
                                        {title}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div >

            <div className={classes.card3}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Grid item className={classes.gridWraper}>
                            <Typography variant="h4" gutterBottom >
                                <Box fontWeight={900} m={5} color='white'>
                                    QUESTIONS ABOUT DUTY OF CARE <br />
                                ASK OUR EXPERTS.   </Box>
                            </Typography>
                            <Button size="large" variant='contained' className={classes.button2} >ASK AN EXPERT</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div >

            <div className={classes.card4}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Grid item className={classes.gridWraper}>
                            <Typography variant="h4"  >
                                <Box fontWeight={900} m={5}>
                                    GLOBAL CHALLENGE. WORLD CLASS RESPONSE. </Box>
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </div >
            <div className={classes.card5}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Grid item className={classes.gridWraper}>
                            <Typography variant="h5"  >
                                <Box fontWeight={300} m={5} color='white' fontStyle="italic" >
                                    “Ground Standards will revolutionize corporate ground transportation safety standards” </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
            <div className={classes.card6}>
                <Grid container className={classes.grid} direction='row'            >
                    <Grid item xs={12}>
                        <Grid item className={classes.gridWraper}>
                            <Typography variant="h5"
                                component="h2" align="center">
                                <Box fontWeight={400} m={5} color='white' >
                                    We work as a single united team with market leading firms around the world and give our clients the highest quality ground transportation solutions possible.</Box>
                            </Typography>
                            <Button size="large" variant='contained' className={classes.button2} >GET IN TOUCH</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div >

        </div >
    );
}
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 4,
    border: 1,
    style: { width: '7rem', height: '7rem' },
};
export default ZCards;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW'
        },
        card1: {
            backgroundColor: 'grey',
            paddingBottom: '100px',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/citydown1-1.jpg)`,

        },
        card2: {
            backgroundColor: 'black',
            padding: '50px',
        },
        card3: {
            backgroundColor: 'green',
            width: '100vW'
        },
        card4: {
            backgroundColor: 'white',
        },
        card5: {

            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/citydown1-1.jpg)`,
            boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)',
        },
        card6: {
            paddingTop: '10%',
            paddingBottom: '10%',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/citydown1-1.jpg)`,
            boxShadow: 'inset 0 0 0 1000px rgba(0, 100, 0, 0.9)',

        },
        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }, grid: {
            padding: '50px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        gridWraper: {
            textAlign: 'center',


        },
        iconContainer: {
            justify: 'center',
            alignItems: 'center'
        }, title: {
            fontSize: 20,
            fontWeight: 900,
            color: 'white',
            whiteSpace: 'pre-line',
        },

        button2: {
            backgroundColor: '#013220',
            color: 'white',
            width: '200px',
            maxWidth: '300px',
            maxHeight: '50px',
            minWidth: '100px',
            minHeight: '50px',


        }

    })
);