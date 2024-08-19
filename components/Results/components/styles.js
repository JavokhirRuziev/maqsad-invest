import { theme } from '@/theme';

export const textH1Styles = {
    color: 'common.black',
    textTransform: 'uppercase',
    maxWidth: { desktop: 980, tablet: 880, mobile: 780 },
    mx: 'auto',
    textAlign: 'center',
    mb: { desktop: 6, tablet: 6, mobile: 6, mobileSmall: 4 },
};

export const cardWrapperStyles = {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    width: { desktop: 300, tablet: 270, mobile: 240 },
};

export const iconWrapperStyles = {
    bgcolor: 'primary.main',
    borderRadius: 2,
    p: 2,
};

export const wrapperStyles = {
    borderRadius: 4,
    p: { desktop: 6, tablet: 6, mobile: 6, mobileSmall: 4 },
    border: `1px solid ${theme.palette.primary.main}`,
    mx: 'auto',
    maxWidth: { desktop: 1200, tablet: 1000, mobile: 800 },
};

export const resultsCardWrapperStyles = {
    display: 'flex',
    gap: { desktop: 5, tablet: 5, mobile: 5, mobileSmall: 2 },
    flexWrap: 'wrap',
    justifyContent: {
        desktop: 'center',
        tablet: 'center',
        mobile: 'center',
        mobileSmall: 'flex-start',
    },
    mb: 6,
};
