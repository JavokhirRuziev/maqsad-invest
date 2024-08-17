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
        width: 350,
        height: 250,
        aspectRatio: '16/9',
        borderRadius: 2,
    },
};
