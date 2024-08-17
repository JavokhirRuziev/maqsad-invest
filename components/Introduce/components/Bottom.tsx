import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { theme } from '@/theme';

const Bottom = () => {
    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 10 }}>
            <Box
                sx={{
                    background: `linear-gradient(to right, ${theme.palette.common.black}, ${theme.palette.secondary.light})`,
                    width: 'fit-content',
                    mx: 'auto',
                    borderRadius: 100,
                    p: 3,
                    mb: 3,
                }}
            >
                <RestoreIcon
                    sx={{ width: 130, height: 130, color: 'info.light' }}
                />
            </Box>
            <Typography variant='h1' sx={textH1Styles}>
                zapusk <br />
                <Typography
                    component={'span'}
                    variant='h1'
                    color={'primary.main'}
                >
                    — bu vaqt mashinasi{' '}
                </Typography>
            </Typography>
            <Typography
                variant='h2'
                color={'common.white'}
                textAlign={'center'}
            >
                Boshqalar{' '}
                <Typography
                    variant='h2'
                    component={'span'}
                    bgcolor={'primary.main'}
                >
                    10 yilda
                </Typography>{' '}
                bosib o’tadigan yo’lni siz{' '}
                <Typography
                    variant='h2'
                    component={'span'}
                    bgcolor={'primary.main'}
                >
                    1 yil
                </Typography>{' '}
                ichida bosib o’tishingiz mumkin
            </Typography>
        </Box>
    );
};

export default Bottom;

const textH1Styles = {
    color: 'common.white',
    textTransform: 'uppercase',
    mb: 3,
    mx: 'auto',
    textAlign: 'center',
};
