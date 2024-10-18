import { createTheme } from '@mui/material/styles';
import { green, blue, grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: blue[500],
        },

    },

    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    padding: '8px 24px',
                    borderRadius: '8px',

                },
                contained: {
                    color: '#ffffff',
                },
                outlined: {
                    color: green[600],

                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
            }
        },

    },

    typography: {
        body1: {
            color: '#0B1134CC',
        },
    }
});

theme.shadows[1] = "0px 5px 22px lightgray";
