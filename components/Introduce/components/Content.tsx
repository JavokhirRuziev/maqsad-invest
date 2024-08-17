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
                        Mirsaid mirodilov
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
                    <img src={'/images/Human.png'} alt='human' />
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

const imageWrapperStyles = {
    position: 'absolute',
    top: -200,
    left: '50%',
    bottom: 0,
    transform: 'translateX(-50%)',
    img: {
        width: 513,
        height: 640,
        objectFit: 'contain',
    },
};

const contentContainerStyles = {
    p: 3,
    bgcolor: 'common.black',
    borderRadius: 4,
    position: 'relative',
};

const overlayStyles = {
    background:
        'linear-gradient(180deg, rgba(225,225,225,0) 0%, rgba(225,225,225,0) 25%,rgba(225,225,225,0) 50%,rgba(0,0,0,0.5) 75%,rgba(0,0,0,1) 100%)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
};

const rightBlockWrapperStyles = {
    width: '30%',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    gap: 3,
};

const text100Styles = {
    maxWidth: 200,
    textAlign: 'center',
    mr: 15,
};

const text30Styles = {
    maxWidth: 200,
    textAlign: 'center',
    mr: 5,
};

const contentWrapperStyles = {
    px: 6,
    py: 3,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'space-between',
};

const titleWrapperStyles = {
    textTransform: 'uppercase',
    fontSize: '30px !important',
    color: 'common.white',
    mb: 2,
};

const listTextStyles = {
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 2,
    maxWidth: 380,
};
