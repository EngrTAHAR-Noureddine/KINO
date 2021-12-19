import {createTheme, responsiveFontSizes} from "@mui/material";

export const SIGN_GROUP_THEME = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        },
    },
});

export let RESPONSIVE_THEME = createTheme();
RESPONSIVE_THEME = responsiveFontSizes(RESPONSIVE_THEME);



export const themeTyp = createTheme();

themeTyp.typography.h5 = {
    [themeTyp.breakpoints.down('md')]: {
        fontSize: '0.5rem',
    },
    [themeTyp.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },

};


