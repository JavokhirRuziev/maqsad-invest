import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const index = () => {
    return (
        <Box sx={{ bgcolor: 'common.black', py: 10 }}>
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
                            <Typography variant='h4' sx={contactsTextStyles}>
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
    { title: 'Telefon:', description: '95 555 00 05' },
    { title: 'Telegram', description: '@instamediauz' },
];

const titleStyles = {
    fontSize: {
        desktop: '40px !important',
        tablet: '35px !important',
        mobile: '30px !important',
    },
    color: 'common.white',
    mb: 3,
};

const textH4Styles = {
    fontSize: {
        desktop: '18px !important',
        tablet: '16px !important',
        mobile: '14px !important',
    },
    color: 'common.white',
    mb: 5,
};
const contactsTextStyles = {
    fontSize: {
        desktop: '18px !important',
        tablet: '16px !important',
        mobile: '14px !important',
    },
    color: 'common.white',
};
