import '@/styles/global.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Layout from '@/components/layouts/Layout'
import type { AppProps } from "next/app";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@/config/theme';
import ResponsiveProvider from '@/contexts/ResponsiveContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ResponsiveProvider>
            <ThemeProvider theme={lightTheme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ResponsiveProvider>
    );
}
