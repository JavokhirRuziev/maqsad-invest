import { theme } from '@/theme';

export const dividerStyles = {
    width: {
        desktop: 244,
        tablet: 244,
        mobile: 244,
        mobileSmall: 100,
    },
    bgcolor: 'primary.light',
    height: { desktop: 5, tablet: 5, mobile: 5, mobileSmall: 2.5 },
};

export const bgWrapperStyles = {
    pt: {
        desktop: 20,
        tablet: 20,
        mobile: 18,
        mobileSmall: 16,
    },
    pb: { desktop: 7, tablet: 7, mobile: 7, mobileSmall: 0 },
};

export const raceContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: { desktop: 3, tablet: 3, mobile: 3, mobileSmall: 1.5 },
    justifyContent: 'center',
    mb: 4,
};

export const aPointStyles = {
    p: { desktop: 2, tablet: 2, mobile: 2, mobileSmall: 1 },
    borderRadius: 2,
    bgcolor: 'secondary.light',
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
};
export const bPointStyles = {
    fontFamily: `'UbuntuBold', sans-serif !important`,
    p: { desktop: 2, tablet: 2, mobile: 2, mobileSmall: 1 },
    borderRadius: 2,
    bgcolor: 'common.black',
    color: 'common.white',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
};

export const pointerContainerStyles = {
    position: 'relative',
    width: 86,
    height: 86,
    mx: 'auto',
    mb: 2,
};

export const materialsTextStyles = {
    maxWidth: { desktop: 755, tablet: 655, mobile: 555 },
    textAlign: 'center',
    mx: 'auto',
    color: 'common.white',
    textTransform: 'uppercase',
};

export const youPointerTitleStyles = {
    color: 'common.white',
    textAlign: 'center',
    mb: 2,
};

export const cardWrapperStyles2 = {
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap',
    mt: 10,
    justifyContent: 'center',
};

export const iconStyles = {
    mr: {
        desktop: 1,
        tablet: 1,
        mobile: 1,
        mobileSmall: 0.5,
    },
    width: {
        desktop: 24,
        tablet: 24,
        mobile: 24,
        mobileSmall: 16,
    },
};

export const cardWrapperStyles = {
    maxWidth: { desktop: 430, tablet: 390, mobile: 340, mobileSmall: 340 },
    p: { desktop: 3, tablet: 2.5, mobile: 2, mobileSmall: 1.5 },
    background: `linear-gradient(to right, ${theme.palette.common.black}, ${theme.palette.primary.main})`,
    borderRadius: 2,
    display: 'flex',
    gap: 3,
    flexDirection: {
        desktop: 'unset',
        tablet: 'unset',
        mobile: 'unset',
        mobileSmall: 'column',
    },
};

export const cardLeftBlockWrapperStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: 2,
    width: {
        desktop: '50%',
        tablet: '50%',
        mobile: '50%',
        mobileSmall: 'auto',
    },
    p: 2,
};

export const iconWrapperStyles = {
    background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    width: {
        desktop: '50%',
        tablet: '50%',
        mobile: '50%',
        mobileSmall: 'auto',
    },
    p: 2,
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const textMarginStyles = {
    mb: {
        desktop: 2,
        tablet: 2,
        mobile: 2,
        mobileSmall: 1,
    },
};
