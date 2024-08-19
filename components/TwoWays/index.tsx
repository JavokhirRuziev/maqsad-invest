import Box from '@mui/material/Box';
import React from 'react';
import SecondaryBg from '../Containers/SecondaryBg';
import { Button, Container, Typography } from '@mui/material';
import Card from './components/Card';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const index = () => {
    return (
        <SecondaryBg sx={{ py: 10 }}>
            <Container>
                <Box>
                    <Typography variant='h1' sx={titleH1Styles}>
                        sizda ikkita yo'l bor:
                    </Typography>
                    <Typography variant='h3' sx={textH3Styles}>
                        Bu imkoniyat sizga boshqa berilmasligi mumkin
                    </Typography>
                    <Box sx={cardWrapperStyles}>
                        {oldNewArr?.map((el) => (
                            <Card {...{ el }} />
                        ))}
                    </Box>
                    <Box sx={buttonStyles}>
                        <Button
                            endIcon={
                                <ConfirmationNumberIcon
                                    sx={{
                                        color: 'warning.main',
                                        width: 50,
                                        height: 50,
                                    }}
                                />
                            }
                        >
                            yangi hayotga chiptani olish
                        </Button>
                    </Box>
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default index;

const oldNewArr = [
    {
        title: 'eski xayot',
        description:
            'Xayotingizdan eng zo’r imkoniyat kelganda keyingi safar deb, orzularingizni hammasini hayolda qoldirish',
        img: '/images/old.webp',
        color: 'error.main',
    },
    {
        title: 'yangi xayot',
        description:
            '2024 yilda katta daromadga ega bo’lgan xolda shu kunda eng to’g’ri qaror qilganingizni eslab o’tirish',
        img: '/images/new.webp',
        color: 'warning.light',
    },
];

const titleH1Styles = {
    textAlign: 'center',
    color: 'common.white',
    maxWidth: 960,
    mx: 'auto',
    textTransform: 'uppercase',
};

const textH3Styles = {
    color: 'common.white',
    textAlign: 'center',
    mt: 3,
};

const cardWrapperStyles = {
    mt: 8,
    display: 'flex',
    gap: 4,
    justifyContent: 'center',
};

const buttonStyles = {
    mt: 6,
    display: 'flex',
    justifyContent: 'center',
};
