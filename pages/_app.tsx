import '@/styles/global.css'
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
