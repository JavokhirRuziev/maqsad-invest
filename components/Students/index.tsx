import React from 'react';
import SecondaryBg from '../Containers/SecondaryBg';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InterviewsCard from './components/Interviews';
import StudentsCard from './components/StudentsCard';
import { students } from '@/public/data/students';
import { useEffect, useRef } from 'react';

const Index = () => {
    const iframeContainerRef = useRef<null | any>(null);

    useEffect(() => {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/2Fvz9qgmeGA';
        iframe.frameBorder = '0';
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.title = 'YouTube video';
        iframeContainerRef.current.appendChild(iframe);
    }, []);

    return (
        <SecondaryBg sx={{ py: 10 }}>
            <Container>
                <Box>
                    <Typography variant='h1' sx={titleH1Styles}>
                        Bosh shogirtimning natijasi
                    </Typography>
                    <Box
                        sx={iframeWrapperStyles}
                        ref={iframeContainerRef}
                    ></Box>
                    <Typography
                        variant='h1'
                        textAlign='center'
                        color='common.white'
                        mt={4}
                    >
                        Equinox +
                    </Typography>
                    <Typography variant='h1' sx={titleStudentsStyles}>
                        O'quvchilarim bilan intervyular
                    </Typography>
                    <Box sx={cardWrapperStyles}>
                        {interviewsArr?.map((el) => (
                            <InterviewsCard {...{ el }} />
                        ))}
                    </Box>
                    <Typography variant='h1' sx={titleStudentStyles}>
                        O'quvchilarimning natijalari
                    </Typography>
                    <Box sx={studentCardWrapperStyles}>
                        {students?.map((el) => (
                            <StudentsCard {...{ el }} />
                        ))}
                    </Box>
                </Box>
            </Container>
        </SecondaryBg>
    );
};

export default Index;

const interviewsArr = [
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
    'https://www.youtube.com/embed/2Fvz9qgmeGA',
];

const titleH1Styles = {
    textAlign: 'center',
    color: 'common.white',
    maxWidth: 750,
    mx: 'auto',
    textTransform: 'uppercase',
};

const iframeWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    mt: 4,
    iframe: {
        width: 250,
        height: 450,
        aspectRatio: '16/9',
        borderRadius: 2,
    },
};

const titleStudentsStyles = {
    textTransform: 'uppercase',
    mx: 'auto',
    maxWidth: 500,
    color: 'common.white',
    textAlign: 'center',
    mt: 8,
};

const cardWrapperStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 3,
    justifyContent: 'center',
    mt: 6,
};

const titleStudentStyles = {
    mt: 10,
    mb: 6,
    color: 'common.white',
    textAlign: 'center',
    maxWidth: 600,
    mx: 'auto',
};
const studentCardWrapperStyles = {
    display: 'flex',
    gap: { desktop: 8, tablet: 6, mobile: 4 },
    flexWrap: 'wrap',
    justifyContent: 'center',
};
