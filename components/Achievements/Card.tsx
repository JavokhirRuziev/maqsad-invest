import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerifiedIcon from '@mui/icons-material/Verified';
import {
    iconStyles,
    imageWrapperStyles,
    overlayStyles,
    textContainerStyles,
    textOverlayStyles,
    titleH1Styles,
    wrapperStyles,
} from './components/styles';

type CardTypes = {
    el: {
        title: string;
        description: string;
        img: string;
    };
};

const Card = ({ el }: CardTypes) => {
    return (
        <Box sx={wrapperStyles}>
            <Box sx={overlayStyles} />
            <Box sx={textOverlayStyles} />
            <Box sx={textContainerStyles}>
                <Typography variant='h1' sx={titleH1Styles}>
                    {el?.title}
                </Typography>
                <Typography variant='h2' color={'common.white'}>
                    {el?.description}
                </Typography>
            </Box>
            <Box sx={imageWrapperStyles}>
                <img src={el?.img} alt='fake-image' />
            </Box>
            <VerifiedIcon sx={iconStyles} />
        </Box>
    );
};

export default Card;
