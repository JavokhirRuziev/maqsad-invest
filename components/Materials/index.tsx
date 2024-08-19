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
import {
    aPointStyles,
    bgWrapperStyles,
    bPointStyles,
    cardWrapperStyles2,
    dividerStyles,
    iconStyles,
    materialsTextStyles,
    pointerContainerStyles,
    raceContainerStyles,
    youPointerTitleStyles,
} from './components/styles';

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
                <Box sx={cardWrapperStyles2}>
                    {materials?.map((el) => (
                        <Card {...{ el }} />
                    ))}
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default index;
