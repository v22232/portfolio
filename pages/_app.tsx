import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppShell } from '../components/common';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <link
                    rel='icon'
                    type='image/x-icon'
                    href='/icons/ico-logo.png'
                />

                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                <meta
                    name='viewport'
                    content='user-scalable=no,width=device-width,initial-scale=1'
                />
                <meta name='description' content="Vuhee's portfolio" />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='portfolio' />
                <meta property='og:description' content="Vuhee's portfolio" />
                <meta property='og:image' content='/images/sky.jpg' />
                <meta
                    property='og:url'
                    content='https://v-portfolio.vercel.app/'
                />

                <title>Vuhee's portfolio</title>

                <link
                    href='https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700,900|Open+Sans:400,700&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <AppShell>
                <Component {...pageProps} />
            </AppShell>
        </>
    );
}
