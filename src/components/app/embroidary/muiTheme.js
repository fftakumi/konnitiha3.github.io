import {createTheme} from "@mui/material";

const themeOptions = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#dcc8dc',
        },
        secondary: {
            main: '#e6beaa',
        },
    },
    typography: {
        fontFamily: [
            'Kosugi Maru',
        ].join(','),
    },
});

export default themeOptions