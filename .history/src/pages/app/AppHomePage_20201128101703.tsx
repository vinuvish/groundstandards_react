
import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ZHeroSection from '../../components/ZHeroSection';
import ZCards from '../../components/ZCards';
import ZFooter from '../../components/Zfooter';

interface Props { }

const AppHomePage: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <>
            <ZHeroSection />
            <ZCards />

            <ZFooter />
        </>
    )
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

AppHomePage.defaultProps = {};

export default AppHomePage;


