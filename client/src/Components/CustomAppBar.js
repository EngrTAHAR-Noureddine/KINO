import {Component} from "react";
import {AppBar, Box, Button, ButtonGroup, Grid, Toolbar} from '@mui/material';
import {black_80} from "../Themes/Styles/Color";
import { MOVIES, SERIES, ANIME, WWE, SIGN_IN, SIGN_UP} from "../Themes/String/String";
import {TYPOGRAPHY_MENU_XL, TYPOGRAPHY_LOGO} from "../Themes/Styles/Typographies";
import {MENU_BUTTON_XL} from "../Themes/Elements/Buttons";
import {ThemeProvider} from "@emotion/react";
import {SIGN_GROUP_THEME} from "../Themes/Theme/Themes";
import {SearchBar} from "../Themes/Elements/SearchBar";
import {MENU_BUTTON} from "../Themes/Elements/IconButton";

class CustomAppBar extends Component{

    render() {
        return (
            <Box sx={{flexGrow: 1}} bgcolor={"transparent"}>
                    <AppBar position={"fixed"} sx={{backgroundColor:black_80}}>
                        <Toolbar>
                            <Grid  container xs={12} >
                                <Grid  item xs={6} xl={4} bgcolor={'transparent'}
                                       display={'flex'}
                                       flexDirection={'row'}
                                       justifyContent={'left'}>

                                    <MENU_BUTTON/>
                                    <TYPOGRAPHY_LOGO/>

                                </Grid>
                                <Grid item xs={4} bgcolor={'transparent'}
                                      display={{xs:'none', xl:'flex'}}
                                      flexDirection={'column'} alignItems={'center'}
                                      justifyContent={'center'}>
                                    <div>
                                    <MENU_BUTTON_XL item={MOVIES}/>
                                    <MENU_BUTTON_XL item={SERIES}/>
                                    <MENU_BUTTON_XL item={ANIME}/>
                                    <MENU_BUTTON_XL item={WWE}/>
                                    </div>
                                </Grid>
                                <Grid item xs={6} xl={4}
                                      display={'flex'}
                                      flexDirection={'column'}
                                      justifyContent={'center'}>
                                    <div>
                                    <Grid container xs={12}
                                          display={'flex'}
                                          flexDirection={'row'}
                                          justifyContent={'right'}>

                                        <Grid item xs={12} xl={9}>
                                           <SearchBar/>
                                        </Grid>

                                        <Grid item
                                              lg={3}
                                              display={{xs:'none', xl:'flex'}}
                                              flexDirection={'column'}
                                              justifyContent={'center'}>
                                           <div>
                                               <ThemeProvider theme={SIGN_GROUP_THEME}>
                                                   <ButtonGroup variant="text">
                                                       <Button sx={{textTransform: 'none'}}>
                                                           <TYPOGRAPHY_MENU_XL item ={SIGN_IN}/>
                                                       </Button>
                                                       <Button sx={{textTransform: 'none'}}>
                                                           <TYPOGRAPHY_MENU_XL item ={SIGN_UP}/>
                                                       </Button>
                                                   </ButtonGroup>
                                               </ThemeProvider>

                                           </div>
                                        </Grid>
                                    </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
            </Box>
        )
    }
}

export default CustomAppBar;