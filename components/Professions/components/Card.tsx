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
                <Typography variant='h1' sx={textH1Styles}>
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
    width: { desktop: 360, tablet: 310, mobile: 250, mobileSmall: 230 },
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: { desktop: 4, tablet: 4, mobile: 4, mobileSmall: 2 },
    position: 'relative',
    p: { desktop: 3, tablet: 2.7, mobile: 2.5, mobileSmall: 2 },
};

const cardDescriptionStyles = {
    py: 2,
    px: { desktop: 4, tablet: 3, mobile: 2.5, mobileSmall: 2 },
    borderLeft: `1px solid ${theme.palette.common.white}`,
    borderTop: `1px solid ${theme.palette.common.white}`,
    borderBottom: `1px solid ${theme.palette.common.white}`,
    borderRadius: { desktop: 2, tablet: 2, mobile: 2, mobileSmall: 1 },
    height: { desktop: 150, tablet: 130, mobile: 110, mobileSmall: 80 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 2,
};

const cardIconWrapperStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    p: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 1.5 },
    border: {
        desktop: `10px solid ${theme.palette.common.white}`,
        tablet: `9px solid ${theme.palette.common.white}`,
        mobile: `7px solid ${theme.palette.common.white}`,
        mobileSmall: `5px solid ${theme.palette.common.white}`,
    },
    width: 'fit-content',
    borderRadius: 100,
    position: 'absolute',
    top: { desktop: -50, tablet: -50, mobile: -50, mobileSmall: -25 },
    right: 50,
};

const textH1Styles = {
    color: 'common.white',
    fontSize: {
        desktop: '30px !important',
        tablet: '27px !important',
        mobile: '24px !important',
        mobileSmall: '20px !important',
    },
};
