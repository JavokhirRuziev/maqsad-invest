import { theme } from '@/theme';

export const textH2Styles = {
    color: 'common.white',
    textAlign: 'center',
    mb: 2,
};

export const textH1Styles = {
    color: 'common.white',
    textTransform: 'uppercase',
    maxWidth: 800,
    mx: 'auto',
    textAlign: 'center',
};

export const cardWrapperStyles = {
    mt: 7,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
};

export const wrapperStyles = (isLastChild) => ({
    bgcolor: isLastChild ? 'secondary.main' : 'common.black',
    py: { desktop: 5, tablet: 4, mobile: 3.5, mobileSmall: 2 },
    px: { desktop: 3, tablet: 3, mobile: 3, mobileSmall: 2 },
    borderRadius: 2,
    mx: 'auto',
    width: { desktop: 738, tablet: 638, mobile: 538, mobileSmall: 300 },
});

export const moduleWrapperStyles = {
    display: 'flex',
    gap: 2,
    p: 1,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 2,
    alignItems: 'center',
    width: 'fit-content',
    mb: 3,
};

export const titleMainStyles = {
    textTransform: 'uppercase',
    color: 'common.white',
    mb: 4,
    fontSize: {
        desktop: '40px !important',
        tablet: '35px !important',
        mobile: '30px !important',
    },
};

export const iconWrapperStyles = {
    bgcolor: 'primary.main',
    p: 0.5,
    borderRadius: 2,
};

export const iconStyles = {
    bgcolor: 'primary.main',
    width: { desktop: 40, tablet: 35, mobile: 30 },
    height: { desktop: 40, tablet: 35, mobile: 30 },
};
