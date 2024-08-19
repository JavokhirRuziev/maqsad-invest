import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import { theme } from '@/theme';

type CardTypes = {
    el: {
        title: string;
        description: string;
        img: string;
        color: string;
    };
};

const Card = ({ el }: CardTypes) => {
    return (
        <Box sx={cardWrpaperStyles}>
            <Box sx={imgStyles}>
                <img src={el?.img} alt='old' />
            </Box>
            <Typography variant='h1' sx={titleH1Styles}>
                {el?.title}
            </Typography>
            <Typography
                variant='h4'
                sx={{ color: el?.color, textAlign: 'center' }}
            >
                {el?.description}
            </Typography>
        </Box>
    );
};

export default Card;

const cardWrpaperStyles = {
    width: { desktop: 350, tablet: 320, mobile: 290, mobileSmall: 160 },
    bgcolor: 'black',
    border: `1px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
    borderRadius: 4,
    p: { desktop: 4, tablet: 3, mobile: 2.5, mobileSmall: 1 },
};

const titleH1Styles = {
    color: 'common.white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: {
        desktop: '35px !important',
        tablet: '30px !important',
        mobile: '25px !important',
    },
    mb: 2,
    whiteSpace: 'nowrap',
};

const imgStyles = {
    img: {
        width: {
            desktop: 315,
            tablet: 280,
            mobile: 260,
            mobileSmall: 140,
        },
        height: {
            desktop: 410,
            tablet: 380,
            mobile: 350,
            mobileSmall: 140,
        },
    },
};
