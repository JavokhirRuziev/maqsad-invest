import React from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';
import { theme } from '@/theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type CardTypes = {
    el: {
        title: string;
        module: string;
        subjects: string[];
        result: string;
    };
};

const Card = ({ el }: CardTypes) => {
    return (
        <Box sx={wrapperStyles}>
            <Box sx={moduleWrapperStyles}>
                <Box sx={iconWrapperStyles}>
                    <InstagramIcon sx={iconStyles} />
                </Box>
                <Typography
                    variant='h3'
                    color='common.white'
                    textTransform={'uppercase'}
                >
                    MODUL {el?.module}
                </Typography>
            </Box>
            <Typography variant='h1' sx={titleMainStyles}>
                {el?.title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Box width={'50%'}>
                    <Typography variant='h4' color={'common.white'} mb={3}>
                        Qanday mavzularni o’z ichiga oladi:
                    </Typography>
                    {el?.subjects?.map((el) => (
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
                <Box sx={rightBlockWrapperStyles}>
                    <Typography variant='h4' color={'common.white'}>
                        Materiallar:
                    </Typography>
                    <Box sx={resultsWrapperStyles}>
                        <Typography variant='h3' color={'common.white'} mb={2}>
                            Natija:
                        </Typography>
                        <Typography variant='body1' color={'common.white'}>
                            {el?.result}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Card;

const wrapperStyles = {
    bgcolor: 'common.black',
    py: 5,
    px: 3,
    borderRadius: 2,
    mx: 'auto',
    minHeight: 410,
    width: 786,
};

const moduleWrapperStyles = {
    display: 'flex',
    gap: 2,
    p: 1,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 2,
    alignItems: 'center',
    width: 'fit-content',
    mb: 3,
};

const titleMainStyles = {
    textTransform: 'uppercase',
    color: 'common.white',
    mb: 4,
    fontSize: '40px !important',
};

const listTextStyles = {
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 2,
};

const resultsWrapperStyles = {
    bgcolor: 'secondary.main',
    p: 2,
    borderRadius: 3,
    width: 250,
};

const iconWrapperStyles = {
    bgcolor: 'primary.main',
    p: 0.5,
    borderRadius: 2,
};

const iconStyles = {
    bgcolor: 'primary.main',
    width: 40,
    height: 40,
};

const rightBlockWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
    mr: 3,
};
