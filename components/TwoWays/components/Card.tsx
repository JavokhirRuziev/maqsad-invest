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
            <Box sx={{ img: { width: 315, height: 410 } }}>
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
    width: 350,
    bgcolor: 'black',
    border: `1px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
    borderRadius: 4,
    p: 4,
};

const titleH1Styles = {
    color: 'common.white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '35px !important',
    mb: 2,
};
