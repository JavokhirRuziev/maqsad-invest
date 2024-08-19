import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VideocamIcon from '@mui/icons-material/Videocam';

const BannerDescription = () => {
    return (
        <Box
            sx={{ display: 'flex', mt: { desktop: 10, tablet: 6, mobile: 4 } }}
        >
            <Box sx={wrapperContainerStyles}>
                <Box sx={{ position: 'relative' }}>
                    <Typography variant='h1' sx={authorStyles}>
                        Sayyora Abduraxmonovadan
                    </Typography>
                    <Typography
                        component={'div'}
                        variant='body1'
                        sx={courseTextStyles}
                    >
                        <VideocamIcon sx={iconStyles} /> Maxsus offlayn kursYoki
                        Amaliy kursga taklif
                    </Typography>
                    <Typography variant='h3' sx={descriptionStyles}>
                        Shaxsiy strategiya Bozorni 8 hil yunalishda tahlil
                        qilish 100 dan ortiq oyiga 1000$ dan 5000$ gacha
                        daromadga chiqan shogirtlar qatoriga qushilish siz ham
                        oyiga 1000$ dan 5000$ gacha daromadga chiqmoqchimisiz
                        joylar soni cheklangan. Bunday imkoniyatni quldan boy
                        bermang
                    </Typography>
                    <Button size='medium'>Joyni band qilish</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default BannerDescription;

const wrapperContainerStyles = {
    maxWidth: {
        desktop: 750,
        tablet: 650,
        mobile: 550,
        mobileSmall: 300,
    },
};

const courseTextStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    textTransform: 'uppercase',
    maxWidth: { desktop: 250, tablet: 250, mobile: 250, mobileSmall: 120 },
    color: 'common.white',
    fontSize: {
        desktop: '12px !important',
        tablet: '12px !important',
        mobile: '12px !important',
        mobileSmall: '8px !important',
    },
};

const authorStyles = {
    color: 'common.white',
    textTransform: 'uppercase',
};

const iconStyles = {
    width: {
        desktop: 15,
        tablet: 15,
        mobile: 15,
        mobileSmall: 10,
    },
    height: {
        desktop: 15,
        tablet: 15,
        mobile: 15,
        mobileSmall: 10,
    },
};

const descriptionStyles = {
    color: 'common.white',
    mt: 4,
    mb: { desktop: 4, tablet: 4, mobile: 4, mobileSmall: 25 },
};
