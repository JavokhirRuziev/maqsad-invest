import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { theme } from '@/theme';
import { results } from '@/public/data/results';
import Button from '@mui/material/Button';

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

const textH1Styles = {
    color: 'common.black',
    textTransform: 'uppercase',
    maxWidth: { desktop: 980, tablet: 880, mobile: 780 },
    mx: 'auto',
    textAlign: 'center',
    mb: { desktop: 6, tablet: 6, mobile: 6, mobileSmall: 4 },
};

const cardWrapperStyles = {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    width: { desktop: 300, tablet: 270, mobile: 240 },
};

const iconWrapperStyles = {
    bgcolor: 'primary.main',
    borderRadius: 2,
    p: 2,
};

const wrapperStyles = {
    borderRadius: 4,
    p: { desktop: 6, tablet: 6, mobile: 6, mobileSmall: 4 },
    border: `1px solid ${theme.palette.primary.main}`,
    mx: 'auto',
    maxWidth: { desktop: 1200, tablet: 1000, mobile: 800 },
};

const resultsCardWrapperStyles = {
    display: 'flex',
    gap: { desktop: 5, tablet: 5, mobile: 5, mobileSmall: 2 },
    flexWrap: 'wrap',
    justifyContent: {
        desktop: 'center',
        tablet: 'center',
        mobile: 'center',
        mobileSmall: 'flex-start',
    },
    mb: 6,
};
