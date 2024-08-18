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
            <Box sx={cardWrapperStyles}>
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
    maxWidth: { desktop: 1200, tablet: 1000, mobile: 800 },
    mx: 'auto',
    textAlign: 'center',
    mb: 4,
};

const cardWrapperStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: { desktop: 8, tablet: 6, mobile: 4 },
    justifyContent: 'center',
};
