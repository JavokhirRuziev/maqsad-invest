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
            <Box sx={{ maxWidth: { desktop: 750, tablet: 650, mobile: 550 } }}>
                <Box sx={{ position: 'relative' }}>
                    <Typography
                        variant='h1'
                        color={'common.white'}
                        textTransform={'uppercase'}
                    >
                        Sayyora Abduraxmonovadan
                    </Typography>
                    <Typography
                        component={'div'}
                        variant='body1'
                        sx={courseTextStyles}
                    >
                        <VideocamIcon sx={{ width: 15, height: 15 }} /> Maxsus
                        offlayn kursYoki Amaliy kursga taklif
                    </Typography>
                    <Typography variant='h3' color='common.white' my={4}>
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

const courseTextStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    textTransform: 'uppercase',
    maxWidth: 250,
    color: 'common.white',
};
