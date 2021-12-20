import {Box, Typography} from "@mui/material";
import {PoppinsFont} from "../Fonts/Fonts";
import {LOGO} from "../String/String";
import {ThemeProvider} from "@emotion/react";
import {RESPONSIVE_THEME, themeTyp, themeTypH6} from "../Theme/Themes";
import React from "react";
import {white_EC} from "./Color";


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
                fontStyle={"normal"}
                fontFamily={PoppinsFont}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
)

export const TYPOGRAPHY_SHORTCUT_LIST = (prop)=>(
    <ThemeProvider theme={themeTyp}>
    <Typography variant={'h5'} color={'white'} fontWeight={'bolder'}
                textAlign={'center'}
                fontStyle={"normal"}
                fontFamily={PoppinsFont}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_POPUP_MENU = (prop) => (
    <ThemeProvider theme={themeTypH6}>
    <Typography variant={'h6'} color={'white'} fontWeight={'bolder'}
                textAlign={'center'}
                fontStyle={"normal"}
                fontFamily={PoppinsFont}
                style={{ wordWrap: "break-word" }}
    >
        {prop.item}
    </Typography>
    </ThemeProvider>
);

export const TYPOGRAPHY_SEARCH_RESULT = (prop)=>(
    <Typography variant={'h5'} width={'inherit'} height={'auto'} textAlign={'left'}
                color={white_EC}
                fontFamily={PoppinsFont}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word" }}
                >
        {prop.item}
    </Typography>
)
export const TYPOGRAPHY_NAME_PERSON = (prop)=>(
    <Typography variant={'h4'} width={'100%'} height={'100%'} textAlign={'center'}
                color={white_EC}
                fontFamily={PoppinsFont}
                fontWeight={prop.Weight}
                style={{ wordWrap: "break-word"}}
    >
        {prop.item}
    </Typography>
);

export const TYPOGRAPHY_GIG_TITLE_UNDERLINED = (prop)=>(
    <Box flexGrow={1} px={5}>
        <Typography variant={'h5'} textAlign={'center'} fontFamily={PoppinsFont} color={'white'} sx={{borderBottom:1, borderColor:'white'}} mb={5}>
            {prop.what} ({prop.number})
        </Typography>
    </Box>
)