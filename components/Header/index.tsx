import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';
import Container from '@mui/material/Container';
import Decoration from './components/Decoration';
import TopBar from './components/TopBar';
import BannerDescription from './components/BannerDescription';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
    authorStyles,
    authorTextStyles,
    backgroundWrapperStyles,
    containerStyles,
    decorationStyles,
    imageContainerStyles,
} from './components/styles';

const index = () => {
    return (
        <Box sx={backgroundWrapperStyles}>
            <Image
                src={'/images/main-bg.webp'}
                objectFit='cover'
                layout='fill'
                alt='main-background'
                className='main-bg'
                priority
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
                            loading='lazy'
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
