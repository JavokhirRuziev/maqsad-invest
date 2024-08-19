import React from 'react';
import Box from '@mui/material/Box';
import SecondaryBg from '../Containers/SecondaryBg';
import Typography from '@mui/material/Typography';
import Card from './Card';
import Container from '@mui/material/Container';
import { achievements } from '@/public/data/achievements';

const index = () => {
    return (
        <SecondaryBg
            sx={{ py: { desktop: 10, tablet: 10, mobile: 10, mobileSmall: 6 } }}
        >
            <Container>
                <Box>
                    <Typography variant='h1' sx={titleH1Styles}>
                        20 yoshimgacha erishgan yutuqlarimga qarang:
                    </Typography>
                    <Box sx={cardWrapperStyles}>
                        {achievements?.map((el) => (
                            <Card {...{ el }} />
                        ))}
                    </Box>
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

const cardWrapperStyles = {
    mt: 7,
    display: 'flex',
    flexWrap: 'wrap',
    gap: { desktop: 4, tablet: 3.5, mobile: 2.5, mobileSmall: 2 },
    justifyContent: 'center',
};
