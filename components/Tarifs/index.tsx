import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import VipCard from './components/VipCard';
import StudentCard from './components/StudentCard';

const index = () => {
    return (
        <Container sx={{ my: 10 }}>
            <Typography variant='h1' sx={textH1Styles}>
                HAR QANDAY SHAROITDAGI INSON BU DASTURDA O’QIY OLISHI{' '}
                <Typography
                    component={'span'}
                    variant='h1'
                    color={'primary.main'}
                >
                    UCHUN 2 TA TARIF QILDIM
                </Typography>
            </Typography>
            <Typography variant='h3' mb={10} textAlign={'center'}>
                Natijaga chiqish faqat sizning xoxishingizga bog’liq!
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 5,
                    justifyContent: 'center',
                }}
            >
                <VipCard />
                <StudentCard />
            </Box>
        </Container>
    );
};

export default index;

const textH1Styles = {
    color: 'common.black',
    textTransform: 'uppercase',
    maxWidth: 980,
    mx: 'auto',
    textAlign: 'center',
    mb: 4,
};
