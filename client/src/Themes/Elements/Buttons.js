import {Button} from "@mui/material";
import {TYPOGRAPHY_MENU_XL} from "../Styles/Typographies";


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
)