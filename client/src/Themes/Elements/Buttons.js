import {Button} from "@mui/material";
import {TYPOGRAPHY_CONTENT_CARD_MOVIE, TYPOGRAPHY_MENU_XL} from "../Styles/Typographies";
import {ArrowForwardIosOutlined, Star} from "@mui/icons-material";
import React from "react";
import {MORE} from "../String/String";
import {more_AE, white_100, yellow_100} from "../Styles/Color";


export const MENU_BUTTON_XL = (prop)=>(
    <Button
        sx={{
        color:white_100,
        textTransform: 'none',
        "&,&:focus,&:hover,&:active": {
            backgroundColor:"transparent",
        }
    }}>
        <TYPOGRAPHY_MENU_XL item={prop.item}/>
    </Button>
);

export const RATING_DISABLED_BUTTON = (prop) => (
    <Button disabled={true} disableElevation={true} endIcon={<Star sx={{color:yellow_100}}/>}>
        <TYPOGRAPHY_CONTENT_CARD_MOVIE item={prop.item}/>
    </Button>
);

export const MORE_BUTTON = () => (
    <Button
        endIcon={<ArrowForwardIosOutlined/>}
        sx={{
            color:more_AE,
            textTransform: 'none',
        }}>
        {MORE}
    </Button>
)