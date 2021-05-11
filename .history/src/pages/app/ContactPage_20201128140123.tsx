import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const ContactPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.cardContainer}></div>

        </>

    );
};
ContactPage.defaultProps = {};

export default ContactPage;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100vW',
            backgroundImage: `url(http://groundstandards.com/wp-content/uploads/citydown1-1.jpg)`,

        },

    })
);