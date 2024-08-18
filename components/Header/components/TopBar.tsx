import React from 'react';
import LogoLight from '@/public/icons/LogoLight';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { theme } from '@/theme';

const TopBar = () => {
    return (
        <Box sx={topbarWrapperStyles}>
            <Box sx={wrapperStyles}>
                <LogoLight />
                <Typography
                    variant='body1'
                    maxWidth={110}
                    color={'common.white'}
                >
                    Instamedia prodyuserlik markazi
                </Typography>
            </Box>
            <Box>
                <Typography variant='h3' sx={startTextStyles}>
                    START: 12 AVGUST
                </Typography>
            </Box>
        </Box>
    );
};

export default TopBar;

const wrapperStyles = {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
};

const startTextStyles = {
    borderRadius: '50px',
    p: '10px 15px',
    border: `1px solid ${theme.palette.common.white}`,
    textTransform: 'uppercase',
    color: 'common.white',
    width: 'fit-content',
};

const topbarWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
