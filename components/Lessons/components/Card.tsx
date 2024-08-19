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
            <Typography variant='h1' sx={titleMainStyles}>
                {el?.title}
            </Typography>
            <Box sx={contentWrapperStyles}>
                <Box sx={leftBlockStyles}>
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

const leftBlockStyles = {
    width: {
        desktop: '50%',
        tablet: '50%',
        mobile: '50%',
        mobileSmall: 'auto',
    },
};

const contentWrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'column',
    },
    rowGap: 3,
};

const wrapperStyles = {
    bgcolor: 'common.black',
    py: { desktop: 5, tablet: 4, mobile: 3.5, mobileSmall: 2 },
    px: { desktop: 3, tablet: 3, mobile: 3, mobileSmall: 2 },
    borderRadius: 2,
    mx: 'auto',
    minHeight: { desktop: 410, tablet: 360, mobile: 310, mobileSmall: 'auto' },
    width: { desktop: 738, tablet: 638, mobile: 538, mobileSmall: 'auto' },
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
    fontSize: {
        desktop: '40px !important',
        tablet: '35px !important',
        mobile: '30px !important',
    },
};

const listTextStyles = {
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: { desktop: 2, tablet: 1.5, mobile: 1, mobileSmall: 0.5 },
};

const resultsWrapperStyles = {
    bgcolor: 'secondary.main',
    p: { desktop: 2, tablet: 1.8, mobile: 1.5, mobileSmall: 1 },
    borderRadius: 3,
    width: { desktop: 250, tablet: 200, mobile: 150 },
};

const iconWrapperStyles = {
    bgcolor: 'primary.main',
    p: 0.5,
    borderRadius: 2,
};

const iconStyles = {
    bgcolor: 'primary.main',
    width: { desktop: 40, tablet: 35, mobile: 30 },
    height: { desktop: 40, tablet: 35, mobile: 30 },
};

const rightBlockWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: { desktop: 250, tablet: 220, mobile: 190, mobileSmall: 130 },
    mr: 3,
};

{
    /* <Box sx={moduleWrapperStyles}>
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
            </Box> */
}
