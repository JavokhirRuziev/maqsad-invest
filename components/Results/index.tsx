import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { results } from '@/public/data/results';
import Button from '@mui/material/Button';
import {
    cardWrapperStyles,
    iconWrapperStyles,
    resultsCardWrapperStyles,
    textH1Styles,
    wrapperStyles,
} from './components/styles';

const index = () => {
    return (
        <Container
            sx={{ my: { desktop: 10, tablet: 10, mobile: 10, mobileSmall: 6 } }}
        >
            <Box sx={wrapperStyles}>
                <Typography variant='h1' sx={textH1Styles}>
                    kursdan so’ng{' '}
                    <Typography
                        component={'span'}
                        variant='h1'
                        color={'primary.main'}
                    >
                        sizni ushbu natijalar kutadi:
                    </Typography>
                </Typography>
                <Box sx={resultsCardWrapperStyles}>
                    {results?.map((el) => (
                        <Box sx={cardWrapperStyles}>
                            <Box sx={iconWrapperStyles}>{el?.icon}</Box>
                            <Typography
                                variant='h4'
                                fontSize={{
                                    desktop: '20px !important',
                                    tablet: '18px !important',
                                    mobile: '16px !important',
                                    mobileSmall: '16px !important',
                                }}
                            >
                                {el?.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button>kursga ro'yxatdan o'tish</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default index;
