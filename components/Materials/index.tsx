import React from 'react';
import SecondaryBg from '../Containers/SecondaryBg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import Image from 'next/image';
import Card from './components/Card';
import { materials } from '@/public/data/materials';

const index = () => {
    return (
        <SecondaryBg sx={{ pt: 20, pb: 7 }}>
            <Container>
                <Typography variant='h1' sx={youPointerTitleStyles}>
                    Sizni
                </Typography>
                <Box sx={pointerContainerStyles}>
                    <Image
                        src={'/images/pointer.png'}
                        alt='pointer'
                        objectFit='cover'
                        layout='fill'
                    />
                </Box>
                <Box sx={raceContainerStyles}>
                    <Typography variant='h2' sx={aPointStyles}>
                        <SportsScoreIcon sx={{ mr: 1 }} />A nuqtadan{' '}
                    </Typography>
                    <Divider
                        sx={{ width: 244, bgcolor: 'primary.light', height: 5 }}
                    />
                    <Typography variant='h2' sx={bPointStyles}>
                        <EmojiEventsIcon sx={{ mr: 1, color: '#FFD700' }} /> B
                        nuqtaga
                    </Typography>
                </Box>
                <Typography variant='h1' sx={materialsTextStyles}>
                    tez olib chiqish uchun kursga ushbu{' '}
                    <Typography
                        variant='h1'
                        component={'span'}
                        color={'common.black'}
                    >
                        narsalarni qo'shdim
                    </Typography>
                </Typography>
                <Box sx={cardWrapperStyles}>
                    {materials?.map((el) => (
                        <Card {...{ el }} />
                    ))}
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default index;

const raceContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    justifyContent: 'center',
    mb: 4,
};

const aPointStyles = {
    p: 2,
    borderRadius: 2,
    bgcolor: 'secondary.light',
    color: 'common.white',
};
const bPointStyles = {
    fontFamily: `'UbuntuBold', sans-serif !important`,
    p: 2,
    borderRadius: 2,
    bgcolor: 'common.black',
    color: 'common.white',
};

const pointerContainerStyles = {
    position: 'relative',
    width: 86,
    height: 86,
    mx: 'auto',
    mb: 2,
};

const materialsTextStyles = {
    maxWidth: 755,
    textAlign: 'center',
    mx: 'auto',
    color: 'common.white',
    textTransform: 'uppercase',
};

const youPointerTitleStyles = {
    color: 'common.white',
    textAlign: 'center',
    mb: 2,
};

const cardWrapperStyles = {
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap',
    mt: 10,
    justifyContent: 'center',
};
