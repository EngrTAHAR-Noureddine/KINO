import {Button, Typography} from "@mui/material";
import {TYPOGRAPHY_CONTENT_CARD_MOVIE, TYPOGRAPHY_MENU_XL} from "../Styles/Typographies";
import {Star} from "@mui/icons-material";
import React from "react";


export const MENU_BUTTON_XL = (prop)=>(
    <Button
        sx={{
        color:'white',
        textTransform: 'none',
        "&,&:focus,&:hover,&:active": {
            backgroundColor:"transparent",
        }
    }}>
        <TYPOGRAPHY_MENU_XL item={prop.item}/>
    </Button>
);

export const RATING_DISABLED_BUTTON = (prop) => (
    <Button disabled={true} disableElevation={true} endIcon={<Star sx={{color:'yellow'}}/>}>
        <TYPOGRAPHY_CONTENT_CARD_MOVIE item={prop.item}/>
    </Button>
);