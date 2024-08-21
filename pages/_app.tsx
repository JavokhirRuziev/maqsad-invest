import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Maqsad Invest</title>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '867822678604600');
              fbq('track', 'PageView');
            `,
                    }}
                />
                <noscript>
                    <img
                        height='1'
                        width='1'
                        style={{ display: 'none' }}
                        src='https://www.facebook.com/tr?id=867822678604600&ev=PageView&noscript=1'
                    />
                </noscript>
            </Head>
            <ToastContainer />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
