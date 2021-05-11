import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

export default function ZFooter() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    fsdffffffffffffffffff
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd  dsaaaaaaaaaaaaaaa dassssssssssssssssss
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
      </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>

    );

}
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));
