import Container from '@mui/material/Container';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './components/Card';
import { professions } from '../../public/data/professions';
import Button from '@mui/material/Button';
import Vawe from './components/Vawe';

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
    maxWidth: { desktop: 800, tablet: 700, mobile: 550, mobileSmall: 400 },
    mx: 'auto',
};

const cardWrapperStyles = {
    display: 'flex',
    my: { desktop: 10, tablet: 9, mobile: 8, mobileSmall: 6 },
    columnGap: { desktop: 8, tablet: 6, mobile: 4, mobileSmall: 3 },
    rowGap: { desktop: 8, tablet: 8, mobile: 7, mobileSmall: 4 },
    flexWrap: 'wrap',
    justifyContent: 'center',
};
const vaweDecorationStyles = {
    position: 'absolute',
    bottom: -140,
    left: '50%',
    transform: 'translateX(-50%)',
};
