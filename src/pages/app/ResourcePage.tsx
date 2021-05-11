
import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const ResourcePage: React.FC<Props> = () => {
    const classes = useStyles();
    return <div>ResourcePage</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

ResourcePage.defaultProps = {};

export default ResourcePage;