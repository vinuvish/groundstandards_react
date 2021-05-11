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
            <Grid container className={classes.grid} direction='column'>

                <Grid item xs={12}>
                    <Card className={classes.image} classes={{ root: state.raised ? classes.cardHovered : "" }}
                        onMouseOver={() => setState({ raised: true, shadow: 3 })}
                        onMouseOut={() => setState({ raised: false, shadow: 1 })}
                        raised={state.raised} >

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
                    <Card className={classes.image} classes={{ root: state.raised ? classes.cardHovered : "" }}
                        onMouseOver={() => setState({ raised: true, shadow: 3 })}
                        onMouseOut={() => setState({ raised: false, shadow: 1 })}
                        raised={state.raised} >

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
    }
}));

OurSolutionPage.defaultProps = {};

export default OurSolutionPage;

