import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import SecondaryBg from '../Containers/SecondaryBg';
import Card from './components/Card';
import { lessons } from '@/public/data/lessons';
import { secretLessons } from '@/public/data/lessons';
import Button from '@mui/material/Button';
import RaceDecoration from './components/RaceDecoration';
import CardSecretLessons from './components/CardSecretLessons';
import {
    cardWrapperStyles,
    textH1Styles,
    textH2Styles,
} from './components/styles';

const index = () => {
    const scrollToTarifs = () => {
        const tarifsSection = document.getElementById('tarifs');
        if (tarifsSection) {
            tarifsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <SecondaryBg
            sx={{ py: { desktop: 10, tablet: 10, mobile: 10, mobileSmall: 6 } }}
        >
            <Container>
                <Typography variant='h2' sx={textH2Styles}>
                    Kursimning ichida siz
                </Typography>
                <Typography variant='h1' sx={textH1Styles}>
                    40 dan ortiq darslarga ega bólasiz
                </Typography>
                <Box sx={cardWrapperStyles}>
                    {lessons?.map((el) => (
                        <Card {...{ el }} />
                    ))}
                </Box>
                <Typography variant='h1' sx={textH1Styles} mt={5} mb={3}>
                    bu hali hammasi emas!
                </Typography>
                <RaceDecoration />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {secretLessons?.map((el, ind, arr) => {
                        const isLastChild = arr?.length === ind + 1;
                        return <CardSecretLessons {...{ el, isLastChild }} />;
                    })}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button onClick={scrollToTarifs}>ro'yxatdan o'tish</Button>
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default index;
