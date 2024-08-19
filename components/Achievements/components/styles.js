import { theme } from '@/theme';

export const wrapperStyles = {
    p: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 2 },
    position: 'relative',
    overflow: 'hidden',
    width: { desktop: 540, tablet: 500, mobile: 440, mobileSmall: 400 },
    height: { desktop: 260, tablet: 230, mobile: 200, mobileSmall: 150 },
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
};

export const overlayStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.common.black})`,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '65%',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
    zIndex: 2,
};

export const imageWrapperStyles = {
    position: 'absolute',
    right: 0,
    top: 0,
    img: {
        width: { desktop: 300, tablet: 270, mobile: 230, mobileSmall: 200 },
        height: { desktop: 310, tablet: 280, mobile: 250, mobileSmall: 230 },
        objectFit: 'cover',
    },
};

export const textOverlayStyles = {
    position: 'absolute',
    zIndex: 4,
    width: { desktop: '65%', tablet: '65%', mobile: '65%', mobileSmall: '67%' },
    top: 0,
    left: 0,
    bottom: 0,
    background:
        'linear-gradient(90deg, rgba(225,225,225,0) 0%, rgba(225,225,225,0) 25%,rgba(225,225,225,0) 50%,rgba(5, 29, 25,1) 75%,rgba(5, 29, 25,1) 100%)',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
};

export const textContainerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 3,
    m: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 2 },
    p: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 2 },
    border: `1px solid ${theme.palette.common.white}`,
    width: '40%',
    borderRadius: 2,
};

export const titleH1Styles = {
    color: 'common.white',
    textTransform: 'uppercase',
    mb: 3,
    fontSize: {
        desktop: '35px !important',
        tablet: '30px !important',
        mobile: '25px !important',
        mobileSmall: '22px !important',
    },
};

export const iconStyles = {
    position: 'absolute',
    left: '58%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    zIndex: 5,
    color: 'warning.main',
    width: 50,
    height: 50,
};

export const titleH1Style2 = {
    textAlign: 'center',
    color: 'common.white',
    maxWidth: 960,
    mx: 'auto',
    textTransform: 'uppercase',
};

export const cardWrapperStyles = {
    mt: 7,
    display: 'flex',
    flexWrap: 'wrap',
    gap: { desktop: 4, tablet: 3.5, mobile: 2.5, mobileSmall: 2 },
    justifyContent: 'center',
};
