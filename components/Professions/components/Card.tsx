import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { theme } from '@/theme';

type CardType = {
    el: {
        title: string;
        description: string;
        icon: ReactNode;
    };
};

const Card = ({ el }: CardType) => {
    return (
        <Box sx={cardWrapperStyles}>
            <Box sx={cardDescriptionStyles}>
                <Typography
                    variant='h1'
                    fontSize={'30px !important'}
                    color='common.white'
                >
                    {el?.title}
                </Typography>
                <Typography variant='body1' color='common.white'>
                    {el?.description}
                </Typography>
            </Box>
            <Box sx={cardIconWrapperStyles}>{el?.icon}</Box>
        </Box>
    );
};

export default Card;

const cardWrapperStyles = {
    width: { desktop: 360, tablet: 310, mobile: 250 },
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: 4,
    position: 'relative',
    p: { desktop: 3, tablet: 2.7, mobile: 2.5 },
};

const cardDescriptionStyles = {
    py: 2,
    px: { desktop: 4, tablet: 3, mobile: 2.5 },
    borderLeft: `1px solid ${theme.palette.common.white}`,
    borderTop: `1px solid ${theme.palette.common.white}`,
    borderBottom: `1px solid ${theme.palette.common.white}`,
    borderRadius: 2,
    height: { desktop: 150, tablet: 130, mobile: 110 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 2,
};

const cardIconWrapperStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    p: { desktop: 3, tablet: 2.5, mobile: 2 },
    border: {
        desktop: `10px solid ${theme.palette.common.white}`,
        tablet: `9px solid ${theme.palette.common.white}`,
        mobile: `7px solid ${theme.palette.common.white}`,
    },
    width: 'fit-content',
    borderRadius: 100,
    position: 'absolute',
    top: -50,
    right: 50,
};
