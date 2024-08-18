import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const VipCard = () => {
    return (
        <Box sx={vipTarifWrapperStyles}>
            <Typography variant='h3' sx={tarifTextStyles}>
                TARIF
            </Typography>
            <Typography variant='h1' sx={titleStyles}>
                Vip
            </Typography>
            <Divider
                sx={{ width: 175, mx: 'auto', bgcolor: 'grey.600', mb: 3 }}
            />
            {vipTarifArr?.map((el) => (
                <Typography variant='h4' sx={listTextStyles}>
                    &middot; {el}
                </Typography>
            ))}
            <Typography variant='h1' sx={discountPriceStyles}>
                2500$
            </Typography>
            <Typography variant='h1' sx={priceStyles}>
                $1500
            </Typography>
            <Button sx={buttonStyles}>vip tarifni tanlash</Button>
            <Typography
                variant='body1'
                textAlign={'center'}
                color={'info.light'}
            >
                Qolgan joylar soni: 50
            </Typography>
        </Box>
    );
};

export default VipCard;

const vipTarifArr = [
    '0-15 modul',
    'Treker nazorati',
    'SAYYORA ABDURAXMONOVADAN bilan savol va javob chati',
    'Bonus modul (Klientga xat)',
    'Kurs so’ngida sertifikat',
    '5 ta jonli kouch sessiya SAYYORA ABDURAXMONOVADAN bilan',
    'Maxsus bloknot va ruchka',
    'Bitta ekspertning tahlili',
    'InstaMedia jamoasiga qo’shilish imkoniyati',
];

const vipTarifWrapperStyles = {
    py: { desktop: 5, tablet: 4, mobile: 3 },
    px: { deskot: 7, tablet: 5.5, mobile: 4 },
    bgcolor: 'common.black',
    borderRadius: 3,
    width: 'fit-content',
};
const tarifTextStyles = {
    color: 'secondary.light',
    textAlign: 'center',
    mb: 3,
};

const titleStyles = {
    color: 'info.light',
    textAlign: 'center',
    mb: 3,
    textTransform: 'uppercase',
};

const listTextStyles = {
    maxWidth: 230,
    mb: { desktop: 2.5, tablet: 2, mobile: 1.5 },
    fontSize: {
        desktop: '16px !important',
        tablet: '14px !important',
        mobile: '12px !important',
    },
    color: 'common.white',
};

const discountPriceStyles = {
    textDecoration: 'line-through',
    color: 'primary.light',
    textAlign: 'center',
    mb: 2,
};

const priceStyles = {
    color: 'primary.main',
    textAlign: 'center',
    mb: 6,
};

const buttonStyles = {
    borderRadius: 100,
    mb: 3,
    p: '20px 30px !important',
    fontSize: '20px !important',
};
