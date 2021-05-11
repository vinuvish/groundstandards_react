import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const PressPage: React.FC<Props> = () => {
    const classes = useStyles();
    return <div>PressPage</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

PressPage.defaultProps = {};

export default PressPage;

