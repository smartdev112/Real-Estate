import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    typography: {
        fontFamily: 'Rubik'
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
                font-family: "Rubik";
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(/assets/fonts/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0Uw.ttf)
                    format("truetype");
            }
            @font-face {
                font-family: "Rubik";
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(/assets/fonts/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYiFV0Uw.ttf)
                    format("truetype");
            }
            @font-face {
                font-family: "Rubik";
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: url(/assets/fonts/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FV0Uw.ttf)
                    format("truetype");
            }
            @font-face {
                font-family: "Rubik";
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(/assets/fonts/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-FV0Uw.ttf)
                    format("truetype");
            }
          `,
        },
      },
})