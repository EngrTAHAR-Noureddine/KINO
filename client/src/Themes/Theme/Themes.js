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


/*
export const themeTyp = createTheme();

themeTyp.typography.h6 = {
    [themeTyp.breakpoints.up('lg')]: {
        fontSize: '0.8rem',
    },
    [themeTyp.breakpoints.up('xl')]: {
        fontSize: '1rem',
    },
};
*/

