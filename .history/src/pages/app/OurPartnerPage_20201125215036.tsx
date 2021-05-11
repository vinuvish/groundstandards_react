import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface Props { }

const OurPartnerPage: React.FC<Props> = () => {
    const classes = useStyles();
    return <div>OurPartnerPage</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {}
}));

OurPartnerPage.defaultProps = {};

export default OurPartnerPage;

