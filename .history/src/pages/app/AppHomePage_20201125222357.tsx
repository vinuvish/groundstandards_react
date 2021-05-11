
import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const AppHomePage: React.FC<Props> = () => {
    const classes = useStyles();
    return <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
    >
        <h1>About</h1>
    </div>
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

AppHomePage.defaultProps = {};

export default AppHomePage;


