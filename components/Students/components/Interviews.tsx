import Box from '@mui/material/Box';
import React from 'react';
import { useEffect, useRef } from 'react';

const InterviewsCard = ({ el }: { el: string }) => {
    const iframeContainerRef = useRef<null | any>(null);

    useEffect(() => {
        const iframe = document.createElement('iframe');
        iframe.src = el;
        iframe.frameBorder = '0';
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.title = 'YouTube video';
        iframeContainerRef.current.appendChild(iframe);
    }, []);
    return (
        <Box>
            <Box sx={iframeWrapperStyles} ref={iframeContainerRef}></Box>
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
