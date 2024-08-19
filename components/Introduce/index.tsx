import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SecondaryBg from '../Containers/SecondaryBg';
import Container from '@mui/material/Container';
import Content from './components/Content';
import Bottom from './components/Bottom';
import {
    textH4Styles,
    titleMainStyles,
    titleMainWrapperStyles,
} from './components/styles';

const index = () => {
    return (
        <SecondaryBg
            sx={{ py: { desktop: 10, tablet: 10, mobile: 10, mobileSmall: 6 } }}
        >
            <Container>
                <Box
                    sx={{
                        maxWidth: { desktop: 1100, tablet: 1000, mobile: 900 },
                        mx: 'auto',
                    }}
                >
                    <Typography variant='h4' sx={textH4Styles}>
                        Meni tanimaganlar uchun:
                    </Typography>
                    <Box sx={titleMainWrapperStyles}>
                        <Typography variant='h1' sx={titleMainStyles}>
                            kurs muallifi
                        </Typography>
                        <Typography variant='h1' sx={titleMainStyles}>
                            haqida
                        </Typography>
                    </Box>
                    <Content />
                    <Bottom />
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default index;
