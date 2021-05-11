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