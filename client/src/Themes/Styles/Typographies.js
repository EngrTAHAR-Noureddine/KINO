import { Typography} from "@mui/material";
import {PoppinsFont} from "../Fonts/Fonts";
import {LOGO} from "../String/String";
import {ThemeProvider} from "@emotion/react";
import {RESPONSIVE_THEME, themeTyp} from "../Theme/Themes";
import React from "react";


export const  TYPOGRAPHY_LOGO = ()=>(

        <Typography fontFamily={PoppinsFont} fontWeight={900} fontStyle={'italic'} variant="h3" component="div"
                    sx={{flexGrow: 1}} color={'#e50914'}>
            {LOGO}
        </Typography>

);




export const TYPOGRAPHY_MENU_XL = (prop)=>(
    <ThemeProvider theme={RESPONSIVE_THEME}>
    <Typography
    variant={'h6'}
    fontStyle={"normal"}
    fontFamily={PoppinsFont}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_CONTENT_CARD_MOVIE = (prop)=>(
    <Typography variant={'h5'} color={'white'} fontWeight={'bolder'}
                textAlign={'center'}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
)

export const TYPOGRAPHY_SHORTCUT_LIST = (prop)=>(
    <ThemeProvider theme={themeTyp}>
    <Typography variant={'h5'} color={'white'} fontWeight={'bolder'}
                textAlign={'center'}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
)