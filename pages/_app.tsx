import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import Head from 'next/head';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const noop = () => {};
        console.log = noop;
        console.warn = noop;
        console.error = noop;
        console.info = noop;
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Maqsad Invest</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
