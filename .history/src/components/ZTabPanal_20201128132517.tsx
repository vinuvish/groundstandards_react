import { Box, Typography } from '@material-ui/core';
import React from 'react';


interface Props {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const ZTabPanal: React.FC<Props> = ({ children, value, index, ...other }) => {

    return (
        <Box borderTop={0} >
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}>
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}

            </div>
        </Box>
    );


}

ZTabPanal.defaultProps = {};

export default ZTabPanal;