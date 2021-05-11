import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const ContactPage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <>
            <ZHeroSection />
            <ZCards />

        </>

    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

ContactPage.defaultProps = {};

export default ContactPage;

