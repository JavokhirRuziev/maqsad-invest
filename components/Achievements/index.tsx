import React from 'react';
import Box from '@mui/material/Box';
import SecondaryBg from '../Containers/SecondaryBg';
import Typography from '@mui/material/Typography';
import Card from './Card';
import Container from '@mui/material/Container';
import { achievements } from '@/public/data/achievements';
import { cardWrapperStyles, titleH1Style2 } from './components/styles';

const index = () => {
    return (
        <SecondaryBg
            sx={{ py: { desktop: 10, tablet: 10, mobile: 10, mobileSmall: 6 } }}
        >
            <Container>
                <Box>
                    <Typography variant='h1' sx={titleH1Style2}>
                        20 yoshimgacha erishgan yutuqlarimga qarang:
                    </Typography>
                    <Box sx={cardWrapperStyles}>
                        {achievements?.map((el, ind) => (
                            <Card key={ind} {...{ el }} />
                        ))}
                    </Box>
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default index;
