import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

const LogoLight = () => {
    return (
        <Box sx={logoWrapperStyles}>
            <Image
                src={'/images/logo-light.png'}
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
    width: 74,
    height: 74,
    position: 'relative',
    borderRadius: '100px',
    '.logo-light': {
        borderRadius: '100px',
    },
};
