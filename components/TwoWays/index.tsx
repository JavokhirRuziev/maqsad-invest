import Box from '@mui/material/Box';
import React from 'react';
import SecondaryBg from '../Containers/SecondaryBg';
import { Container, Typography } from '@mui/material';

const index = () => {
    return (
        <SecondaryBg sx={{ py: 10 }}>
            <Container>
                <Box>
                    <Typography variant='h1' sx={titleH1Styles}>
                        sizda ikkita yo'l bor:
                    </Typography>
                    <Typography
                        variant='h3'
                        sx={{
                            color: 'common.white',
                            textAlign: 'center',
                            mt: 3,
                        }}
                    >
                        Bu imkoniyat sizga boshqa berilmasligi mumkin
                    </Typography>
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default index;

const titleH1Styles = {
    textAlign: 'center',
    color: 'common.white',
    maxWidth: 960,
    mx: 'auto',
    textTransform: 'uppercase',
};
