import { AppProps } from 'next/app';

import { AppShell } from '../components/common';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppShell>
            <Component {...pageProps} />
        </AppShell>
    );
}
