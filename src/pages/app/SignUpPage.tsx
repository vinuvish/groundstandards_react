import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const SignUpPage: React.FC<Props> = () => {
    const classes = useStyles();
    return <div>About Us</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

SignUpPage.defaultProps = {};

export default SignUpPage;

