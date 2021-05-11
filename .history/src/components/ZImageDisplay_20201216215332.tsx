import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, Grid, Typography, CardActionArea, CardMedia } from '@material-ui/core';

interface Props {
    imageUral: string;

}

const ZImageDisplay: React.FC<Props> = () => {
    return (
        <Box border={1} color="white" borderRadius={0}>
            <Card className={classes.card} variant="outlined"  >
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>

                    <Typography className={classes.body} color="textSecondary">
                        {body}
                    </Typography>

                </CardContent>
                <CardActions className={classes.button}>
                    <Button size="large" variant='contained' color='primary' >Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default ZImageDisplay;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        card: {
            minWidth: 275,
            minHeight: 200,
            width: '350px',
            paddingTop: '20px',
            background: 'black'

        },

        title: {
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 900,
            color: 'white'
        },
        body: {
            marginBottom: 5,
            marginTop: '20px',
            padding: 10,
            fontSize: 16,
            color: '#A8A8A8',
            fontWeight: 300,
            letterSpacing: 1
        },
        button: { justifyContent: 'center', marginBottom: 20, }
    })

);