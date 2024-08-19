import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RestoreIcon from '@mui/icons-material/Restore';
import { theme } from '@/theme';

const Bottom = () => {
    return (
        <Box sx={wrapperStyles}>
            <Box sx={iconWrapperStyles}>
                <RestoreIcon sx={iconStyles} />
            </Box>
            <Typography variant='h1' sx={textH1Styles}>
                zapusk <br />
                <Typography
                    component={'span'}
                    variant='h1'
                    color={'primary.main'}
                >
                    — bu vaqt mashinasi{' '}
                </Typography>
            </Typography>
            <Typography
                variant='h2'
                color={'common.white'}
                textAlign={'center'}
            >
                Boshqalar{' '}
                <Typography
                    variant='h2'
                    component={'span'}
                    bgcolor={'primary.main'}
                >
                    10 yilda
                </Typography>{' '}
                bosib o’tadigan yo’lni siz{' '}
                <Typography
                    variant='h2'
                    component={'span'}
                    bgcolor={'primary.main'}
                >
                    1 yil
                </Typography>{' '}
                ichida bosib o’tishingiz mumkin
            </Typography>
        </Box>
    );
};

export default Bottom;

const textH1Styles = {
    color: 'common.white',
    textTransform: 'uppercase',
    mb: 3,
    mx: 'auto',
    textAlign: 'center',
};

const iconWrapperStyles = {
    background: `linear-gradient(to right, ${theme.palette.common.black}, ${theme.palette.secondary.light})`,
    width: 'fit-content',
    mx: 'auto',
    borderRadius: 100,
    p: { desktop: 3, tablet: 3, mobile: 3, mobileSmall: 2 },
    mb: 3,
};

const iconStyles = {
    width: {
        desktop: 130,
        tablet: 110,
        mobile: 90,
        mobileSmall: 70,
    },
    height: {
        desktop: 130,
        tablet: 110,
        mobile: 90,
        mobileSmall: 70,
    },
    color: 'info.light',
};

const wrapperStyles = {
    maxWidth: 800,
    mx: 'auto',
    mt: { desktop: 10, tablet: 10, mobile1: 10, mobileSmall: 10 },
};
