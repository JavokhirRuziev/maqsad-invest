import { theme } from '@/theme';

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
    bottom: { desktop: -10, tablet: -5, mobile: -50, mobileSmall: -10 },
    right: 0,
    zIndex: -1,
};

export const authorTextStyles = {
    position: 'absolute',
    color: 'common.white',
    maxWidth: 275,
    bottom: { desktop: 150, tablet: 150, mobile: 150, mobileSmall: 50 },
    right: { desktop: 100, tablet: 100, mobile: 100, mobileSmall: '40%' },
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

export const wrapperStyles = {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    mb: { mobileSmall: 3 },
};

export const startTextStyles = {
    borderRadius: '50px',
    p: {
        desktop: '10px 15px',
        tablet: '10px 15px',
        mobile: '8px 13px',
        mobileSmall: '6px 11px',
    },
    border: `1px solid ${theme.palette.common.white}`,
    textTransform: 'uppercase',
    color: 'common.white',
    width: 'fit-content',
    mb: { mobileSmall: 3 },
};

export const topbarWrapperStyles = {
    display: 'flex',
    alignItems: {
        desktop: 'center',
        tablet: 'center',
        mobile: 'center',
        mobileSmall: 'unset',
    },
    justifyContent: 'space-between',
    flexDirection: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'column',
    },
    rowGap: 3,
    alignItems: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'center',
    },
};

export const wrapperContainerStyles = {
    maxWidth: {
        desktop: 750,
        tablet: 650,
        mobile: 550,
        mobileSmall: 300,
    },
};

export const courseTextStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    textTransform: 'uppercase',
    maxWidth: { desktop: 250, tablet: 250, mobile: 250, mobileSmall: 120 },
    color: 'common.white',
    fontSize: {
        desktop: '12px !important',
        tablet: '12px !important',
        mobile: '12px !important',
        mobileSmall: '8px !important',
    },
};

export const authorStyles2 = {
    color: 'common.white',
    textTransform: 'uppercase',
};

export const iconStyles = {
    width: {
        desktop: 15,
        tablet: 15,
        mobile: 15,
        mobileSmall: 10,
    },
    height: {
        desktop: 15,
        tablet: 15,
        mobile: 15,
        mobileSmall: 10,
    },
};

export const descriptionStyles = {
    color: 'common.white',
    mt: 4,
    mb: { desktop: 4, tablet: 4, mobile: 4, mobileSmall: 40 },
};
