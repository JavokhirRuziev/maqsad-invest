import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
    contactsTextStyles,
    textH4Styles,
    titleStyles,
} from './components/styles';

const index = () => {
    return (
        <Box
            sx={{
                bgcolor: 'common.black',
                py: { desktop: 10, tablet: 10, mobile: 10, mobileSmall: 6 },
            }}
        >
            <Container>
                <Typography variant='h1' sx={titleStyles}>
                    SAVOLLARINGIZ QOLDIMI?
                </Typography>
                <Typography variant='h4' sx={textH4Styles}>
                    Bizga qo’ng’iroq qiling yoki telegram orqali bog’laning
                </Typography>
                <Box sx={{ display: 'flex', gap: 10 }}>
                    {contactsArr?.map((el) => (
                        <Box>
                            <Typography
                                variant='body1'
                                color={'info.light'}
                                mb={2}
                            >
                                {el?.title}
                            </Typography>
                            <Typography
                                variant='h4'
                                sx={contactsTextStyles}
                                onClick={() => window.open(el.link)}
                            >
                                {el?.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default index;

const contactsArr = [
    {
        title: 'Telefon:',
        description: '33 130 95 90',
        link: 'tel:+998331309590',
    },
    {
        title: 'Telegram',
        description: '@MAQSAD_aloqa_uchun',
        link: 'https://t.me/MAQSAD_aloqa_uchun',
    },
];
