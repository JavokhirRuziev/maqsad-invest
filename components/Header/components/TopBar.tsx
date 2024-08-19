import React from 'react';
import LogoLight from '@/public/icons/LogoLight';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { theme } from '@/theme';
import { startTextStyles, topbarWrapperStyles, wrapperStyles } from './styles';

const TopBar = () => {
    return (
        <Box sx={topbarWrapperStyles}>
            <Box sx={wrapperStyles}>
                <LogoLight />
                <Typography
                    variant='body1'
                    maxWidth={{
                        desktop: 110,
                        tablet: 110,
                        mobile: 110,
                        mobileSmall: 120,
                    }}
                    color={'common.white'}
                >
                    Moliyaviy kompaniya
                </Typography>
            </Box>
            {/* <Box>
                <Typography variant='h3' sx={startTextStyles}>
                    START: 12 AVGUST
                </Typography>
            </Box> */}
        </Box>
    );
};

export default TopBar;
