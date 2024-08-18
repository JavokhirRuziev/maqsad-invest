import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
    breakpoints: {
        values: {
            mobile: 700,
            tablet: 1100,
            desktop: 1440,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#6CAE40',
            light: '#A3C36B',
        },
        secondary: {
            main: '#4B7A29',
            light: '#3A3A3A',
        },
        info: {
            main: '#FFFFFF',
            light: '#D9D9D9',
        },
        error: {
            main: '#F50000',
            light: '#F5000033',
        },
        warning: {
            main: '#FFD700',
            light: '#2090d8',
        },
        common: {
            black: '#051d19',
        },
    },
    shadows: ['0px 12px 24px 0px #5B68713D', '0px 0px 1px 0px #E5E9EB'],
    typography: {
        fontFamily: `'UbuntuRegular', sans-serif`,
    },
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                fixed: true,
                maxWidth: 'xl',
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                color: 'primary',
            },
        },
    },
});

theme = createTheme(theme, {
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthXl: {
                    [theme.breakpoints.down('tablet')]: {
                        padding: '0 16px',
                        maxWidth: '100%',
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        maxWidth: '1300px',
                        padding: '0 16px',
                    },
                    [theme.breakpoints.up('desktop')]: {
                        maxWidth: '1440px',
                        padding: '0 16px',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    color: theme.palette.common.white,
                    borderRadius: '4px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                    fontWeight: 'bold',
                    position: 'relative',
                    overflow: 'hidden',
                    [theme.breakpoints.up('desktop')]: {
                        fontSize: 30,
                        padding: '40px 100px',
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        fontSize: 25,
                        padding: '30px 70px',
                    },
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: 20,
                        padding: '20px 50px',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: 40,
                        fontFamily: `'UbuntuBold', sans-serif`,
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        fontSize: 50,
                        fontFamily: `'UbuntuBold', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontSize: 60,
                        fontFamily: `'UbuntuBold', sans-serif`,
                    },
                },
                h2: {
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: 20,
                        fontFamily: `'UbuntuLight', sans-serif`,
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        fontSize: 26,
                        fontFamily: `'UbuntuLight', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontSize: 30,
                        fontFamily: `'UbuntuLight', sans-serif`,
                    },
                },
                h3: {
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: 18,
                        fontFamily: `'UbuntuRegular', sans-serif`,
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        fontSize: 22,
                        fontFamily: `'UbuntuRegular', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontFamily: `'UbuntuRegular', sans-serif`,
                        fontSize: 25,
                    },
                },
                h4: {
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: 16,
                        fontFamily: `'UbuntuRegular', sans-serif`,
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        fontSize: 18,
                        fontFamily: `'UbuntuRegular', sans-serif`,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontFamily: `'UbuntuRegular', sans-serif`,
                        fontSize: 22,
                    },
                },
                body1: {
                    [theme.breakpoints.down('tablet')]: {
                        fontFamily: `'UbuntuRegular', sans-serif`,
                        fontSize: 12,
                    },
                    [theme.breakpoints.between('tablet', 'desktop')]: {
                        fontFamily: `'UbuntuRegular', sans-serif`,
                        fontSize: 14,
                    },
                    [theme.breakpoints.up('desktop')]: {
                        fontFamily: `'UbuntuRegular', sans-serif`,
                        fontSize: 14,
                    },
                },
                body2: {
                    fontFamily: `'UbuntuRegular', sans-serif`,
                    fontSize: 13,
                },
                subtitle1: {
                    fontFamily: `'UbuntuRegular', sans-serif`,
                    fontSize: 12,
                    color: theme.palette.grey[600],
                },
                subtitle2: {
                    fontFamily: `'UbuntuRegular', sans-serif`,
                    fontSize: 10,
                },
            },
        },
    },
});
