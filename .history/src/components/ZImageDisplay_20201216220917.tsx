import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, Grid, Typography, CardActionArea, CardMedia } from '@material-ui/core';

interface Props {
    imageUral: string;

}

const ZImageDisplay: React.FC<Props> = ({ imageUral }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        raised: false,
        shadow: 1,
    })
    return (

        <Card className={classes.image} classes={{ root: state.raised ? classes.cardHovered : "" }}
            onMouseOver={() => setState({ raised: true, shadow: 3 })}
            onMouseOut={() => setState({ raised: false, shadow: 1 })}
            raised={state.raised} >

            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={'image'}

                    image={imageUral}
                    title={'image'}
                />
            </CardActionArea>
        </Card>

    );
}

export default ZImageDisplay;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        image: {
            maxWidth: 60,
            transition: "transform 0.50s ease-in-out"
        }, cardHovered: {
            transform: "scale3d(1.05, 1.05, 2)"

        }
    })

);