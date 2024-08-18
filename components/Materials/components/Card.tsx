import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';
import { theme } from '@/theme';

type CardTypes = {
    el: {
        order: string;
        title: string;
        description: string;
        icon: ReactNode;
    };
};

const Card = ({ el }: CardTypes) => {
    return (
        <Box sx={cardWrapperStyles}>
            <Box sx={cardLeftBlockWrapperStyles}>
                <Typography variant='h1' color={'common.black'} mb={2}>
                    {el?.order}
                </Typography>
                <Typography variant='h4' color={'common.white'} mb={2}>
                    {el?.title}
                </Typography>
                <Typography variant='body1' color={'common.white'}>
                    {el?.description}
                </Typography>
            </Box>
            <Box sx={iconWrapperStyles}>{el?.icon}</Box>
        </Box>
    );
};

export default Card;

const cardWrapperStyles = {
    maxWidth: { desktop: 430, tablet: 390, mobile: 340 },
    p: { desktop: 3, tablet: 2.5, mobile: 2 },
    background: `linear-gradient(to right, ${theme.palette.common.black}, ${theme.palette.primary.main})`,
    borderRadius: 2,
    display: 'flex',
    gap: 3,
};

const cardLeftBlockWrapperStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: 2,
    width: '50%',
    p: 2,
};

const iconWrapperStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    width: '50%',
    p: 2,
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
