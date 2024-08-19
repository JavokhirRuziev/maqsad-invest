import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';
import Container from '@mui/material/Container';
import Decoration from './components/Decoration';
import TopBar from './components/TopBar';
import BannerDescription from './components/BannerDescription';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const index = () => {
    return (
        <Box sx={backgroundWrapperStyles}>
            <Image
                src={'/images/main-bg.webp'}
                objectFit='cover'
                layout='fill'
                alt='main-background'
                className='main-bg'
            />

            <Container sx={containerStyles}>
                <Box py='15px'>
                    <TopBar />
                    <BannerDescription />
                    <Box sx={imageContainerStyles}>
                        <img
                            src={'/images/human.webp'}
                            className='human-image'
                            alt='human-image'
                        />
                    </Box>
                    <Box sx={authorTextStyles}>
                        <Box sx={authorStyles}>
                            <Divider sx={{ width: 70, bgcolor: 'grey.100' }} />
                            <Typography variant='h2' color={'grey.300'}>
                                kurs muallifi
                            </Typography>
                        </Box>
                        <Typography
                            variant='h2'
                            textAlign={'right'}
                            fontFamily={`'UbuntuBold',sans-serif !important`}
                        >
                            Sayyora Abduraxmonovadan
                        </Typography>
                    </Box>
                    <Box sx={decorationStyles}>
                        <Decoration />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default index;

const containerStyles = {
    position: 'relative',
    minHeight: { desktop: 800, tablet: 700, mobile: 544, mobileSmall: 500 },
    height: {
        desktop: 'auto',
        tablet: 'auto',
        mobile: 'auto',
        mobileSmall: 650,
    },
};

const backgroundWrapperStyles = {
    width: '100vw',
    position: 'relative',
    '.main-bg': { zIndex: -1 },
    overflow: 'hidden',
    pb: 7,
};

const decorationStyles = {
    position: 'absolute',
    bottom: -100,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: -1,
};

const imageContainerStyles = {
    '.human-image': {
        width: { desktop: 721, tablet: 621, mobile: 521, mobileSmall: 437 },
        height: { desktop: 843, tablet: 743, mobile: 643, mobileSmall: 511 },
        objectFit: 'cover',
    },
    position: 'absolute',
    bottom: { desktop: -10, tablet: -5, mobile: -50, mobileSmall: -100 },
    right: 0,
    zIndex: -1,
};

const authorTextStyles = {
    position: 'absolute',
    color: 'common.white',
    maxWidth: 275,
    bottom: { desktop: 150, tablet: 150, mobile: 150, mobileSmall: 100 },
    right: { desktop: 100, tablet: 100, mobile: 100, mobileSmall: '50%' },
    transform: {
        desktop: 'none',
        tablet: 'none',
        mobile: 'none',
        mobileSmall: 'translateX(50%)',
    },
    bgcolor: 'rgba(0, 0, 0, 0.2)',
    p: { desktop: '16px', tablet: '16px', mobile: '16px', mobileSmall: '10px' },
    borderRadius: '8px',
};

const authorStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
