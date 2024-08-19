import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './components/Card';
import { professions } from '../../public/data/professions';
import Button from '@mui/material/Button';
import Vawe from './components/Vawe';
import {
    cardWrapperContainerStyles,
    textH1ContainerStyles,
    textH2Styles,
    vaweDecorationStyles,
} from './components/styles';

const index = () => {
    const scrollToTarifs = () => {
        const tarifsSection = document.getElementById('me');
        if (tarifsSection) {
            tarifsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Box sx={{ overflowX: 'clip', position: 'relative' }}>
            <Container sx={{ my: 7 }}>
                <Box>
                    <Typography variant='h2' sx={textH2Styles}>
                        6 toifa insonlar qatoriga kirsangiz
                    </Typography>
                    <Typography variant='h1' sx={textH1ContainerStyles}>
                        mening dasturim aniq{' '}
                        <Typography
                            component={'span'}
                            variant='h1'
                            color={'primary.main'}
                        >
                            siz uchun to’g’ri keladi
                        </Typography>
                    </Typography>
                    <Box sx={cardWrapperContainerStyles}>
                        {professions?.map((el) => (
                            <Card {...{ el }} />
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={scrollToTarifs}>Ha, bu men</Button>
                    </Box>
                </Box>
            </Container>
            <Box sx={vaweDecorationStyles}>
                <Vawe />
            </Box>
        </Box>
    );
};

export default index;
