import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { introduce } from '@/public/data/inctroduce';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { theme } from '@/theme';

const Content = () => {
    return (
        <Box sx={contentContainerStyles}>
            <Box sx={contentWrapperStyles}>
                <Box zIndex={2}>
                    <Typography variant='h1' sx={titleWrapperStyles}>
                        SAYYORA ABDURAXMONOVADAN
                    </Typography>
                    {introduce?.map((el) => (
                        <Typography
                            component={'div'}
                            variant='body1'
                            sx={listTextStyles}
                        >
                            <CheckCircleIcon sx={{ color: 'secondary.main' }} />
                            {el}
                        </Typography>
                    ))}
                </Box>
                <Box sx={imageWrapperStyles}>
                    <img src={'/images/human.webp'} alt='human' />
                </Box>
                <Box sx={rightBlockWrapperStyles}>
                    <Box sx={text100Styles}>
                        <Typography variant='h1' color={'common.white'}>
                            +100
                        </Typography>
                        <Typography variant='body1' color={'common.white'}>
                            kuchli ekspertlar bilan ishlab kelaman
                        </Typography>
                    </Box>
                    <Box sx={text30Styles}>
                        <Typography variant='h1' color={'common.white'}>
                            +30
                        </Typography>
                        <Typography variant='body1' color={'common.white'}>
                            Instamedia markazida ishlaydigan xodimlar soni
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: 200, textAlign: 'center' }}>
                        <Typography variant='h1' color={'common.white'}>
                            $150K
                        </Typography>
                        <Typography variant='body1' color={'common.white'}>
                            O’rtacha zapusklarining hajmi
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={overlayStyles} />
        </Box>
    );
};

export default Content;

const contentContainerStyles = {
    p: { desktop: 3, tablet: 2.5, mobile: 2 },
    bgcolor: 'common.black',
    borderRadius: 4,
    position: 'relative',
    border: `1px solid ${theme.palette.secondary.main}`,
};

const overlayStyles = {
    background: {
        desktop:
            'linear-gradient(180deg, rgba(225,225,225,0) 0%, rgba(225,225,225,0) 25%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.5) 75%,rgba(0,0,0,1) 100%)',
        tablet: 'linear-gradient(180deg, rgba(225,225,225,0) 0%, rgba(225,225,225,0) 25%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.5) 75%,rgba(0,0,0,1) 100%)',
        mobile: 'linear-gradient(180deg, rgba(225,225,225,0) 0%, rgba(225,225,225,0) 25%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.5) 75%,rgba(0,0,0,1) 100%)',
        mobileSmall:
            'linear-gradient(180deg, rgba(225,225,225,0) 0%, rgba(0,0,0,0.25) 25%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.5) 75%,rgba(0,0,0,1) 100%)',
    },
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 4,
};

const rightBlockWrapperStyles = {
    width: {
        desktop: '30%',
        tablet: '30%',
        mobile: '30%',
        mobileSmall: 'auto',
    },
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: {
        desktop: 'column',
        tablet: 'column',
        mobile: 'column',
        mobileSmall: 'unset',
    },
    gap: { desktop: 3, tablet: 3, mobile: 3, mobileSmall: 1 },
    zIndex: 1,
    mt: { desktop: 0, tablet: 0, mobile: 0, mobileSmall: 10 },
};

const text100Styles = {
    maxWidth: { desktop: 200, tablet: 200, mobile: 200, mobileSmall: 200 },
    textAlign: 'center',
    mr: { desktop: 15, tablet: 15, mobile: 15, mobileSmall: 0 },
};

const text30Styles = {
    maxWidth: { desktop: 200, tablet: 200, mobile: 200, mobileSmall: 200 },
    textAlign: 'center',
    mr: { desktop: 5, tablet: 5, mobile: 5, mobileSmall: 0 },
};

const contentWrapperStyles = {
    px: { desktop: 6, tablet: 4, mobile: 3, mobileSmall: 2 },
    py: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 2 },
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'column-reverse',
    },
    gap: 3,
};

const titleWrapperStyles = {
    textTransform: 'uppercase',
    fontSize: {
        desktop: '30px !important',
        tablet: '28px !important',
        mobile: '22px !important',
        mobileSmall: '20px !important',
    },
    color: 'common.white',
    mb: 2,
    maxWidth: { desktop: 500, tablet: 300, mobile: 300 },
};

const listTextStyles = {
    color: 'common.white',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1,
    mb: { desktop: 2, tablet: 1.5, mobile: 1 },
    maxWidth: { desktop: 380, tablet: 280, mobile: 280 },
};

const imageWrapperStyles = {
    position: 'absolute',
    top: { desktop: -200, tablet: -150, mobile: -200, mobileSmall: -200 },
    left: { desktop: '55%', tablet: '55%', mobile: '60%', mobileSmall: 0 },
    bottom: 0,
    transform: {
        desktop: 'translateX(-50%)',
        tablet: 'translateX(-50%)',
        mobile: 'translateX(-50%)',
        mobileSmall: 'none',
    },
    img: {
        width: 350,
        height: 600,
        objectFit: 'contain',
    },
};
