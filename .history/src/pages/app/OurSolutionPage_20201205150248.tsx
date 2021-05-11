import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, Grid, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import { truncate } from 'fs';

interface Props { }

const OurSolutionPage: React.FC<Props> = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        raised1: false,
        raised2: false,
        raised3: false,
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
                        <Card className={classes.image} classes={{ root: state.raised1 ? classes.cardHovered : "" }}
                            onMouseOver={() => setState({
                                raised1: true, raised2: false,
                                raised3: false, shadow: 3
                            })}
                            onMouseOut={() => setState({
                                raised1: false, raised2: false,
                                raised3: false, shadow: 1
                            })}
                            raised={state.raised1} >

                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    alt={'image'}
                                    height="140"
                                    image={'http://groundstandards.com/wp-content/uploads/compliance.png'}
                                    title={'image'}
                                />
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.image} classes={{ root: state.raised2 ? classes.cardHovered : "" }}
                            onMouseOver={() => setState({
                                raised1: false, raised2: true,
                                raised3: false, shadow: 3
                            })}
                            onMouseOut={() => setState({
                                raised1: false, raised2: false,
                                raised3: false, shadow: 1
                            })}
                            raised={state.raised1} >


                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    alt={'image'}
                                    height="140"
                                    image={'http://groundstandards.com/wp-content/uploads/duty-of-care.png'}
                                    title={'image'}
                                />
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item>

                        <Card className={classes.image} classes={{ root: state.raised1 ? classes.cardHovered : "" }}
                            onMouseOver={() => setState({
                                raised1: true, raised2: false,
                                raised3: false, shadow: 3
                            })}
                            onMouseOut={() => setState({
                                raised1: false, raised2: false,
                                raised3: false, shadow: 1
                            })}
                            raised={state.raised1} >


                            <CardActionArea>
                                <CardMedia

                                    component="img"
                                    alt={'image'}
                                    height="140"
                                    image={'http://groundstandards.com/wp-content/uploads/rider-confidence.png'}
                                    title={'image'}
                                />
                            </CardActionArea>

                        </Card>

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

