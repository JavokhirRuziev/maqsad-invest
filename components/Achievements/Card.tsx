import React from 'react';
import { theme } from '@/theme';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerifiedIcon from '@mui/icons-material/Verified';

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

const wrapperStyles = {
    p: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 2 },
    position: 'relative',
    overflow: 'hidden',
    width: { desktop: 540, tablet: 500, mobile: 440, mobileSmall: 400 },
    height: { desktop: 260, tablet: 230, mobile: 200, mobileSmall: 150 },
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
};

const overlayStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.common.black})`,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '65%',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
    zIndex: 2,
};

const imageWrapperStyles = {
    position: 'absolute',
    right: 0,
    top: 0,
    img: {
        width: { desktop: 300, tablet: 270, mobile: 230, mobileSmall: 200 },
        height: { desktop: 310, tablet: 280, mobile: 250, mobileSmall: 230 },
        objectFit: 'cover',
    },
};

const textOverlayStyles = {
    position: 'absolute',
    zIndex: 4,
    width: { desktop: '65%', tablet: '65%', mobile: '65%', mobileSmall: '67%' },
    top: 0,
    left: 0,
    bottom: 0,
    background:
        'linear-gradient(90deg, rgba(225,225,225,0) 0%, rgba(225,225,225,0) 25%,rgba(225,225,225,0) 50%,rgba(5, 29, 25,1) 75%,rgba(5, 29, 25,1) 100%)',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
};

const textContainerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 3,
    m: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 2 },
    p: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 2 },
    border: `1px solid ${theme.palette.common.white}`,
    width: '40%',
    borderRadius: 2,
};

const titleH1Styles = {
    color: 'common.white',
    textTransform: 'uppercase',
    mb: 3,
    fontSize: {
        desktop: '35px !important',
        tablet: '30px !important',
        mobile: '25px !important',
        mobileSmall: '22px !important',
    },
};

const iconStyles = {
    position: 'absolute',
    left: '58%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    zIndex: 5,
    color: 'warning.main',
    width: 50,
    height: 50,
};
