import React from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';
import { theme } from '@/theme';
import {
    iconStyles,
    iconWrapperStyles,
    moduleWrapperStyles,
    titleMainStyles,
    wrapperStyles,
} from './styles';

type CardTypes = {
    el: {
        title: string;
        module: string;
    };
    isLastChild: boolean;
};

const Card = ({ el, isLastChild }: CardTypes) => {
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

export default Card;
