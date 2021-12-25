import {flex_styles} from "../Themes/Styles/styles";
import {
    AppBar,
    Box, Button,Dialog, Divider, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader, Slide, Toolbar, Typography
} from "@mui/material";
import {Download} from "@mui/icons-material";
import {DOWNLOAD} from "../Themes/String/String";
import {forwardRef, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {DOWNLOAD_BUTTON} from "../Themes/Elements/Buttons";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function List_Download (prop){
    return(
        <List  sx={{backgroundColor:'green', borderRadius:2, mt:2, px:1}}>
            {prop.list.map((item)=>(
                <ListItem disablePadding sx={{backgroundColor:'orange', borderRadius:2, mb:1}}>
                        <ListItemButton>
                        <ListItemText primary={`${item}`} />
                        </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

function CustomDialog(prop){
    return(
            <Dialog
                fullScreen
                open={prop.open}
                onClose={prop.handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={prop.handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {prop.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List_Download list={prop.list}/>
            </Dialog>)


}


export function ListDownload(prop) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    return(
        <Box sx={{ width: '100%', height:'100%'}} style={flex_styles.row_center}>
            <List
                sx={{width:'90%', height:'auto', p:2}}
                subheader={
                    <ListSubheader sx={{ backgroundColor:'green', borderRadius:2, p:0}}>
                        <DOWNLOAD_BUTTON  title={DOWNLOAD} handleClickOpen={handleClickOpen} matches={matches}/>
                    </ListSubheader>}>
                    <CustomDialog open={open} title={DOWNLOAD} handleClose={handleClose} list={prop.list} />
                    <Box sx={{display:{xs:'none', lg:'block'}}}>
                        <List_Download list={prop.list}/>
                    </Box>
            </List>
        </Box>
    )

}