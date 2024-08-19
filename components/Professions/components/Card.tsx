import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    cardDescriptionStyles,
    cardIconWrapperStyles,
    cardWrapperStyles,
    textH1Styles,
} from './styles';

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
