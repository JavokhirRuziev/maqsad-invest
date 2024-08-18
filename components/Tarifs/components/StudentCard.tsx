import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { theme } from '@/theme';
import { Button } from '@mui/material';

const StudentCard = () => {
    return (
        <Box sx={cardWrapperStyles}>
            <Box sx={iconWrapperStyles}>
                <LockOpenIcon
                    sx={{
                        width: { desktop: 60, tablet: 50, mobile: 40 },
                        height: { desktop: 60, tablet: 50, mobile: 40 },
                        color: 'warning.main',
                    }}
                />
            </Box>
            <Typography variant='h3' sx={titleH3Styles}>
                shaxsan men bilan birga ishlamoqchi bo’lganlar uchun maxsus
                taklif
            </Typography>
            <Typography variant='h1' sx={titleH1Styles}>
                shogirdlik
            </Typography>
            <Typography
                variant='h4'
                sx={{ textAlign: 'center', mt: 3, color: 'common.white' }}
            >
                Bu tarifda natijaga erishmaslikning imkoni yo’q, chunki 100%
                natijaga kafolat beraman. Har bir o’quvchi shaxsiy nazoratim
                ostida bo’ladi!
            </Typography>
            <Typography variant='h1' sx={discountPriceStyles}>
                $5900
            </Typography>
            <Typography variant='h1' sx={priceStyles}>
                $3800
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Button>shogird tushish</Button>
            </Box>
        </Box>
    );
};

export default StudentCard;

const cardWrapperStyles = {
    position: 'relative',
    bgcolor: 'primary.main',
    py: { desktop: 10, tablet: 8, mobile: 6 },
    px: { desktop: 3.5, tablet: 2.75, mobile: 2 },
    borderRadius: 4,
    maxWidth: 500,
};

const iconWrapperStyles = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bgcolor: 'common.black',
    p: 1.5,
    borderRadius: 100,
    top: -60,
    border: `10px solid ${theme.palette.common.white}`,
};

const titleH3Styles = {
    bgcolor: 'info.main',
    color: 'common.black',
    p: 2,
    borderRadius: 2,
    maxWidth: 520,
    textAlign: 'center',
    textTransform: 'uppercase',
    mt: 3,
};

const titleH1Styles = {
    textTransform: 'uppercase',
    color: 'common.white',
    textAlign: 'center',
    mt: 3,
};

const discountPriceStyles = {
    textDecoration: 'line-through',
    color: 'primary.light',
    textAlign: 'center',
    mb: 2,
    fontSize: {
        desktop: '40px !important',
        tablet: '35px !important',
        mobile: '30px !important',
    },
    mt: 3,
};

const priceStyles = {
    color: 'common.black',
    textAlign: 'center',
    mt: 3,
};
