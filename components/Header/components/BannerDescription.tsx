import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VideocamIcon from '@mui/icons-material/Videocam';
import {
    authorStyles2,
    courseTextStyles,
    descriptionStyles,
    iconStyles,
    wrapperContainerStyles,
} from './styles';

const BannerDescription = () => {
    return (
        <Box sx={bannerWrapperStyles}>
            <Box sx={wrapperContainerStyles}>
                <Box sx={{ position: 'relative' }}>
                    <Typography variant='h1' sx={authorStyles2}>
                        Sayyora Abduraxmonovadan
                    </Typography>
                    <Typography variant='h3' sx={descriptionStyles}>
                        Shaxsiy strategiya <br />
                        Bozorni SMC ICT SNR yunalishlarida  tahlil qilish <br />
                        100 dan ortiq natijali shogirtlar jamoasiga qushilish{' '}
                        <br />
                        Oyiga 1 000$ dan 5 000$ gacha daromad qilishni
                        hohlaysizmi ? <br />
                        Shoshiling! Joylar soni cheklang
                    </Typography>
                    <Box sx={buttonWrapperStyles}>
                        <Button size='medium'>Joyni band qilish</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BannerDescription;

const bannerWrapperStyles = {
    display: 'flex',
    mt: { desktop: 10, tablet: 6, mobile: 4 },
    justifyContent: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'center',
    },
};

const buttonWrapperStyles = {
    display: 'flex',
    justifyContent: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'center',
    },
};

{
    /* <Typography
                        component={'div'}
                        variant='body1'
                        sx={courseTextStyles}
                    >
                        <VideocamIcon sx={iconStyles} /> Maxsus Amaliy kurs
                    </Typography> */
}
