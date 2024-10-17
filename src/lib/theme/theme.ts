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
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
            }
        }
    }
});
