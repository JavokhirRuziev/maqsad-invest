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
        <SecondaryBg sx={bgWrapperStyles}>
            <Container>
                <Typography variant='h1' sx={youPointerTitleStyles}>
                    Sizni
                </Typography>
                <Box sx={pointerContainerStyles}>
                    <Image
                        src={'/images/pointer.webp'}
                        alt='pointer'
                        objectFit='cover'
                        layout='fill'
                    />
                </Box>
                <Box sx={raceContainerStyles}>
                    <Typography variant='h2' sx={aPointStyles}>
                        <SportsScoreIcon sx={iconStyles} />A nuqtadan{' '}
                    </Typography>
                    <Divider sx={dividerStyles} />
                    <Typography variant='h2' sx={bPointStyles}>
                        <EmojiEventsIcon
                            sx={{ ...iconStyles, color: 'warning.main' }}
                        />{' '}
                        B nuqtaga
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

const dividerStyles = {
    width: {
        desktop: 244,
        tablet: 244,
        mobile: 244,
        mobileSmall: 100,
    },
    bgcolor: 'primary.light',
    height: { desktop: 5, tablet: 5, mobile: 5, mobileSmall: 2.5 },
};

const bgWrapperStyles = {
    pt: {
        desktop: 20,
        tablet: 20,
        mobile: 18,
        mobileSmall: 16,
    },
    pb: { desktop: 7, tablet: 7, mobile: 7, mobileSmall: 0 },
};

const raceContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: { desktop: 3, tablet: 3, mobile: 3, mobileSmall: 1.5 },
    justifyContent: 'center',
    mb: 4,
};

const aPointStyles = {
    p: { desktop: 2, tablet: 2, mobile: 2, mobileSmall: 1 },
    borderRadius: 2,
    bgcolor: 'secondary.light',
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
};
const bPointStyles = {
    fontFamily: `'UbuntuBold', sans-serif !important`,
    p: { desktop: 2, tablet: 2, mobile: 2, mobileSmall: 1 },
    borderRadius: 2,
    bgcolor: 'common.black',
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
};

const pointerContainerStyles = {
    position: 'relative',
    width: 86,
    height: 86,
    mx: 'auto',
    mb: 2,
};

const materialsTextStyles = {
    maxWidth: { desktop: 755, tablet: 655, mobile: 555 },
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

const iconStyles = {
    mr: {
        desktop: 1,
        tablet: 1,
        mobile: 1,
        mobileSmall: 0.5,
    },
    width: {
        desktop: 24,
        tablet: 24,
        mobile: 24,
        mobileSmall: 16,
    },
};
