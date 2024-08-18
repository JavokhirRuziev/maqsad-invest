import React from 'react';
import Box from '@mui/material/Box';
import { theme } from '@/theme';
import Typography from '@mui/material/Typography';

type CardTypes = {
    el: {
        name: string;
        a: number;
        b: number;
        link: string;
        img: string;
    };
};

const StudentsCard = ({ el }: CardTypes) => {
    return (
        <Box sx={wrapperStyles}>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Box sx={imageWrapperStyles}>
                    <img src={el?.img} alt='fake' />
                </Box>
                <Box sx={textWrapperStyles}>
                    <Typography variant='h1' sx={textH1Styles}>
                        {el?.name}
                    </Typography>
                    <Typography variant='h4' sx={{ color: 'common.white' }}>
                        A nuqta : {el?.a}$
                    </Typography>
                    <Typography variant='h4' sx={{ color: 'common.white' }}>
                        B nuqta : {el?.b}$
                    </Typography>
                    <Typography variant='h4' sx={{ color: 'common.white' }}>
                        {el?.link}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default StudentsCard;

const wrapperStyles = {
    p: 2,
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.common.black})`,
    borderRadius: 3,
    width: 400,
};

const imageWrapperStyles = {
    img: {
        width: 150,
        height: 230,
        objectFit: 'cover',
        borderRadius: 2,
    },
};
const textWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const textH1Styles = {
    fontSize: '28px !important',
    color: 'common.white',
    textTransform: 'uppercase',
};
