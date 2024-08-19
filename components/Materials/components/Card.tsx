import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';
import {
    cardLeftBlockWrapperStyles,
    cardWrapperStyles,
    iconWrapperStyles,
    textMarginStyles,
} from './styles';

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
                <Typography
                    variant='h1'
                    sx={{ ...textMarginStyles, color: 'common.black' }}
                >
                    {el?.order}
                </Typography>
                <Typography
                    variant='h4'
                    sx={{ ...textMarginStyles, color: 'common.white' }}
                >
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
