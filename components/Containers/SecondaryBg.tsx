import { theme } from '@/theme';
import Box from '@mui/material/Box';
import React, { ReactNode } from 'react';

const SecondaryBg = ({ children, sx }: { children: ReactNode; sx?: any }) => {
    return (
        <Box
            sx={{
                background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

export default SecondaryBg;
