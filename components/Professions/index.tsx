import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './components/Card';
import { professions } from '../../public/data/professions';
import Button from '@mui/material/Button';
import Vawe from './components/Vawe';
import SecondaryBg from '../Containers/SecondaryBg';

const index = () => {
    return (
        <Box sx={{ overflowX: 'clip', position: 'relative' }}>
            <Container sx={{ my: 7 }}>
                <Box>
                    <Typography variant='h2' sx={textH2Styles}>
                        6 toifa insonlar qatoriga kirsangiz
                    </Typography>
                    <Typography variant='h1' sx={textH1Styles}>
                        mening dasturim aniq{' '}
                        <Typography
                            component={'span'}
                            variant='h1'
                            color={'primary.main'}
                        >
                            siz uchun to’g’ri keladi
                        </Typography>
                    </Typography>
                    <Box sx={cardWrapperStyles}>
                        {professions?.map((el) => (
                            <Card {...{ el }} />
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button>Ha, bu men</Button>
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

const textH2Styles = { color: 'common.black', textAlign: 'center', mb: 2 };

const textH1Styles = {
    color: 'common.black',
    textTransform: 'uppercase',
    maxWidth: 800,
    mx: 'auto',
};

const cardWrapperStyles = {
    display: 'flex',
    my: 10,
    gap: 8,
    flexWrap: 'wrap',
};
const vaweDecorationStyles = {
    position: 'absolute',
    bottom: -140,

    left: '50%',
    transform: 'translateX(-50%)',
};
