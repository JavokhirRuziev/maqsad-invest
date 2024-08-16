import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { theme } from '@/theme';
import { results } from '@/public/data/results';
import Button from '@mui/material/Button';

const index = () => {
    return (
        <Container sx={{ my: 10 }}>
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
                                fontSize={'20px !important'}
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

const textH1Styles = {
    color: 'common.black',
    textTransform: 'uppercase',
    maxWidth: 980,
    mx: 'auto',
    textAlign: 'center',
    mb: 6,
};

const cardWrapperStyles = {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    maxWidth: 300,
};

const iconWrapperStyles = {
    bgcolor: 'primary.main',
    borderRadius: 2,
    p: 2,
};

const wrapperStyles = {
    borderRadius: 4,
    p: 6,
    border: `1px solid ${theme.palette.primary.main}`,
    mx: 'auto',
    maxWidth: 1200,
};

const resultsCardWrapperStyles = {
    display: 'flex',
    gap: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    mb: 6,
};
