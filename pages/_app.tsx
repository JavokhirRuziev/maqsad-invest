import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Maqsad Invest</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
