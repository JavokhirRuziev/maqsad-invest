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
                    maxWidth={{
                        desktop: 110,
                        tablet: 110,
                        mobile: 110,
                        mobileSmall: 120,
                    }}
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
    p: {
        desktop: '10px 15px',
        tablet: '10px 15px',
        mobile: '8px 13px',
        mobileSmall: '6px 11px',
    },
    border: `1px solid ${theme.palette.common.white}`,
    textTransform: 'uppercase',
    color: 'common.white',
    width: 'fit-content',
    mb: { mobileSmall: 3 },
};

const topbarWrapperStyles = {
    display: 'flex',
    alignItems: {
        desktop: 'center',
        tablet: 'center',
        mobile: 'center',
        mobileSmall: 'unset',
    },
    justifyContent: 'space-between',
    flexDirection: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'column',
    },
    rowGap: 3,
};
