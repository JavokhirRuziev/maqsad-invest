import React from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';
import { theme } from '@/theme';

type CardTypes = {
    el: {
        title: string;
        module: string;
    };
    isLastChild: boolean;
};

const CardSecretLessons = ({ el, isLastChild }: CardTypes) => {
    return (
        <Box sx={wrapperStyles(isLastChild)}>
            <Box sx={moduleWrapperStyles}>
                <Box sx={iconWrapperStyles}>
                    <InstagramIcon sx={iconStyles} />
                </Box>
                <Typography
                    variant='h3'
                    color='common.white'
                    textTransform={'uppercase'}
                >
                    MODUL {el?.module}
                </Typography>
            </Box>
            <Typography variant='h1' sx={titleMainStyles}>
                {el?.title}
            </Typography>
        </Box>
    );
};

export default CardSecretLessons;

const wrapperStyles = (isLastChild: boolean) => ({
    bgcolor: isLastChild ? 'secondary.main' : 'common.black',
    py: 5,
    px: 3,
    borderRadius: 2,
    mx: 'auto',
    width: 786,
});

const moduleWrapperStyles = {
    display: 'flex',
    gap: 2,
    p: 1,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 2,
    alignItems: 'center',
    width: 'fit-content',
    mb: 3,
};

const titleMainStyles = {
    textTransform: 'uppercase',
    color: 'common.white',
    mb: 4,
    fontSize: '40px !important',
};

const iconWrapperStyles = {
    bgcolor: 'primary.main',
    p: 0.5,
    borderRadius: 2,
};

const iconStyles = {
    bgcolor: 'primary.main',
    width: 40,
    height: 40,
};
