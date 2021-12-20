import {Button} from "@mui/material";
import {
    TYPOGRAPHY_CONTENT_CARD_MOVIE,
    TYPOGRAPHY_MENU_XL,
    TYPOGRAPHY_POPUP_MENU,
    TYPOGRAPHY_SHORTCUT_LIST
} from "../Styles/Typographies";
import {ArrowDropDown, ArrowDropDownCircle, ArrowDropUp, ArrowForwardIosOutlined, Star} from "@mui/icons-material";
import React from "react";
import {MORE} from "../String/String";
import {black_20, black_30, more_AE, white_100, white_20, yellow_100} from "../Styles/Color";
import {PoppinsFont} from "../Fonts/Fonts";


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
);

export const SHORTCUT_LIST_BUTTON = (prop)=>(
    <Button fullWidth={true}
            sx={{height:'100%', borderRadius:2 , textTransform:'none',

                backgroundColor:white_20,
                '&:hover':{
                    backgroundColor: black_20
                }

            }} >

        <TYPOGRAPHY_SHORTCUT_LIST item={prop.item}/>

    </Button>
);

export const POPUP_MENU_BUTTON = (prop)=>(
    <Button
        endIcon={(!prop.state)?<ArrowDropDown/>:<ArrowDropUp/>}

        sx={{
            width:{sm:100,xl:200},
            color:white_100,
            backgroundColor:black_30,
            textTransform: 'none',
            borderRadius:100,
            px:2,
            "&,&:focus,&:hover,&:active":{
                backgroundColor:black_30
            }
        }}
        onClick={prop.toggle}>
        <TYPOGRAPHY_POPUP_MENU item={prop.item}/>
    </Button>
);
export const FILTER_BUTTON = () => (
    <Button sx={{
        color:white_100,
        backgroundColor:'green',
        textTransform: 'none',
        px:2,
        "&,&:focus,&:hover,&:active":{
            backgroundColor:'green'
        },
        fontFamily:PoppinsFont,
        fontWeight:'900',
        fontSize:'1.2rem'
    }}>
        Filter
    </Button>
)