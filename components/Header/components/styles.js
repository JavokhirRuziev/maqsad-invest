export const containerStyles = {
    position: 'relative',
    minHeight: { desktop: 800, tablet: 700, mobile: 544, mobileSmall: 500 },
    height: {
        desktop: 'auto',
        tablet: 'auto',
        mobile: 'auto',
        mobileSmall: 650,
    },
};

export const backgroundWrapperStyles = {
    width: '100vw',
    position: 'relative',
    '.main-bg': { zIndex: -1 },
    overflow: 'hidden',
    pb: 7,
};

export const decorationStyles = {
    position: 'absolute',
    bottom: -100,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: -1,
};

export const imageContainerStyles = {
    '.human-image': {
        width: { desktop: 721, tablet: 621, mobile: 521, mobileSmall: 437 },
        height: { desktop: 843, tablet: 743, mobile: 643, mobileSmall: 511 },
        objectFit: 'cover',
    },
    position: 'absolute',
    bottom: { desktop: -10, tablet: -5, mobile: -50, mobileSmall: -120 },
    right: 0,
    zIndex: -1,
};

export const authorTextStyles = {
    position: 'absolute',
    color: 'common.white',
    maxWidth: 275,
    bottom: { desktop: 150, tablet: 150, mobile: 150, mobileSmall: 100 },
    right: { desktop: 100, tablet: 100, mobile: 100, mobileSmall: '50%' },
    transform: {
        desktop: 'none',
        tablet: 'none',
        mobile: 'none',
        mobileSmall: 'translateX(50%)',
    },
    bgcolor: 'rgba(0, 0, 0, 0.2)',
    p: { desktop: '16px', tablet: '16px', mobile: '16px', mobileSmall: '10px' },
    borderRadius: '8px',
};

export const authorStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
