import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: blue[500],
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
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
                    color: '#FFFFFF',
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl',
            }
        }
    },

    typography: {
        body1: {
            color: '#0B1134CC',
        },
    }
});

theme.shadows[1] = "0px 5px 22px lightgray";
