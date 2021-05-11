import React from 'react';


interface Props {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const ZTabPanal: React.FC<Props> = ({ children, value, index, ...other }) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}


        </div>
    );

}

