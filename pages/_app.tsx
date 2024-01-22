import '@/styles/global.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Layout from '@/components/layouts/Layout'
import type { AppProps } from "next/app";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
