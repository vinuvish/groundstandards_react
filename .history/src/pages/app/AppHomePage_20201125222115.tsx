
import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const AppHomePage: React.FC<Props> = () => {
    const classes = useStyles();
    return <div>Home</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

AppHomePage.defaultProps = {};

export default AppHomePage;


