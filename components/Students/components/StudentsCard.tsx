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
            <Box
                sx={{
                    display: 'flex',
                    gap: { desktop: 3, tablet: 2.5, mobile: 2 },
                }}
            >
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
    p: { desktop: 2, tablet: 1.7, mobile: 1.5 },
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.common.black})`,
    borderRadius: 3,
    width: { desktop: 400, tablet: 370, mobile: 340 },
    height: { desktop: 'auto', tablet: 'auto', mobile: 180 },
};

const imageWrapperStyles = {
    img: {
        width: { desktop: 150, tablet: 140, mobile: 120 },
        height: { desktop: 230, tablet: 200, mobile: 180 },
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
    fontSize: {
        desktop: '28px !important',
        tablet: '24px !important',
        mobile: '20px !important',
    },
    color: 'common.white',
    textTransform: 'uppercase',
};
