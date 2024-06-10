import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5ACCCC',
            contrastText: '#FFFFFF',
            dark: '#335C6E',
            light: '#FABD33',
        },
        secondary: {
            light: '#CFFAFA',
            contrastText: '#FFFFFF',
            main: '#F76434',
            dark: '#4AA088',
        },
        background: {
            default: '#FAAD00',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#335C6E',
            secondary: '#000000',
        },
    },
});

export default theme;
