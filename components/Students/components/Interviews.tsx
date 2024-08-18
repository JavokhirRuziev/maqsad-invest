import Box from '@mui/material/Box';
import React from 'react';

const InterviewsCard = ({ el }: { el: string }) => {
    return (
        <Box>
            <Box sx={iframeWrapperStyles}>
                <iframe
                    src={el}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    title='YouTube video'
                ></iframe>
            </Box>
        </Box>
    );
};

export default InterviewsCard;

const iframeWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    iframe: {
        width: { desktop: 350, tablet: 300, mobile: 250 },
        height: { desktop: 250, tablet: 230, mobile: 210 },
        aspectRatio: '16/9',
        borderRadius: 2,
    },
};
