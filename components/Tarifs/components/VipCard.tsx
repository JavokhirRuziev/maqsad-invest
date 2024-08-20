import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from '@/components/Modals/BaseModal';

const VipCard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            {vipTarifArr?.map((el, ind) => (
                <Typography key={ind} variant='h4' sx={listTextStyles}>
                    &middot; {el}
                </Typography>
            ))}
            <Typography variant='h1' sx={discountPriceStyles}>
                2000$
            </Typography>
            <Typography variant='h1' sx={priceStyles}>
                $1000
            </Typography>
            <BasicModal {...{ open, handleClose }}>
                <Button sx={buttonStyles} onClick={handleOpen}>
                    vip tarifni tanlash
                </Button>
            </BasicModal>
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
    'Mentor nazorati ',
    'Sayyora Abduraxmonova bilan savol javob hatolar ustida ishlash ',
    'Bonus modeli ( sovğa strategiyalar) ',
    'Kurs sóñgida sertifikat ',
    '40 jonli kouch Sayyora Abduraxmonova bilan ',
    'Bitta ekspertning taxlili ',
    'Maqsad capital jamoasiga qóshilish imkoniyati ',
    'Maqsad capitaldan investitsa olib birgalikda ishlash imkoniyati',
];

const vipTarifWrapperStyles = {
    py: { desktop: 5, tablet: 4, mobile: 3, mobileSmall: 2 },
    px: { deskot: 7, tablet: 5.5, mobile: 4, mobileSmall: 3 },
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
    mb: { desktop: 2.5, tablet: 2, mobile: 1.5, mobileSmall: 1.5 },
    fontSize: {
        desktop: '16px !important',
        tablet: '14px !important',
        mobile: '12px !important',
        mobileSmall: '11px !important',
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
    p: {
        desktop: '20px 30px !important',
        tablet: '20px 30px !important',
        mobile: '20px 30px !important',
        mobileSmall: '15px 20px !important',
    },
    fontSize: '20px !important',
};
