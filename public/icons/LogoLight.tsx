import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

const LogoLight = () => {
    return (
        <Box sx={logoWrapperStyles}>
            <Image
                src={'/images/logo-light.webp'}
                alt='logo-light'
                objectFit='cover'
                layout='fill'
                className='logo-light'
            />
        </Box>
    );
};

export default LogoLight;

const logoWrapperStyles = {
    width: { desktop: 85, tablet: 85, mobile: 85, mobileSmall: 60 },
    height: { desktop: 85, tablet: 85, mobile: 85, mobileSmall: 60 },
    position: 'relative',
    borderRadius: '100px',
    '.logo-light': {
        borderRadius: '100px',
    },
};
