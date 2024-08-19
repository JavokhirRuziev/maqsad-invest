import React from 'react';
import LogoLight from '@/public/icons/LogoLight';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { startTextStyles, topbarWrapperStyles, wrapperStyles } from './styles';

const TopBar = () => {
    return (
        <Box sx={topbarWrapperStyles}>
            <Box sx={wrapperStyles}>
                <LogoLight />
                <Typography
                    variant='h4'
                    maxWidth={{
                        desktop: 110,
                        tablet: 110,
                        mobile: 110,
                        mobileSmall: 'auto',
                    }}
                    color={'common.white'}
                >
                    Treding academy
                </Typography>
            </Box>
        </Box>
    );
};

export default TopBar;

{
    /* <Box sx={{ visibility: 'hidden' }}>
                <Typography variant='h3' sx={startTextStyles}>
                    Start: 30 Avgust
                </Typography>
            </Box> */
}
