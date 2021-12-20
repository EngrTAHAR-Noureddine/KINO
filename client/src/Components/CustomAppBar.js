import {AppBar, Box, Button, ButtonGroup, Grid, Toolbar} from '@mui/material';
import {ANIME, MOVIES, SERIES, SIGN_IN, SIGN_UP, WWE} from "../Themes/String/String";
import {TYPOGRAPHY_LOGO, TYPOGRAPHY_MENU_XL} from "../Themes/Styles/Typographies";
import {MENU_BUTTON_XL} from "../Themes/Elements/Buttons";
import {ThemeProvider} from "@emotion/react";
import {SIGN_GROUP_THEME} from "../Themes/Theme/Themes";
import {SearchBar} from "../Themes/Elements/SearchBar";
import {MENU_BUTTON} from "../Themes/Elements/IconButton";
import {ScrollToColor} from '../Themes/Animation/ScrollToColor';
import {flex_styles} from "../Themes/Styles/styles";


function CustomAppBar() {

    return (
        <Box sx={{flexGrow: 1}} bgcolor={"transparent"}>
            <ScrollToColor>
            <AppBar position={"fixed"} sx={{backgroundColor: 'transparent'}}>
                <Toolbar>
                    <Grid container xs={12}>
                        <Grid item xs={6} xl={4} bgcolor={'transparent'} style={flex_styles.row_left}>

                            <MENU_BUTTON/>
                            <TYPOGRAPHY_LOGO/>

                        </Grid>
                        <Grid item xs={4} bgcolor={'transparent'}
                              display={{xs: 'none', xl: 'flex'}}
                              flexDirection={'column'} alignItems={'center'}
                              justifyContent={'center'}>
                            <div>
                                <MENU_BUTTON_XL item={MOVIES}/>
                                <MENU_BUTTON_XL item={SERIES}/>
                                <MENU_BUTTON_XL item={ANIME}/>
                                <MENU_BUTTON_XL item={WWE}/>
                            </div>
                        </Grid>
                        <Grid item xs={6} xl={4} style={flex_styles.col_center}>
                            <div>
                                <Grid container xs={12} style={flex_styles.row_right}>

                                    <Grid item xs={12} xl={9}>
                                        <SearchBar/>
                                    </Grid>

                                    <Grid item
                                          lg={3}
                                          display={{xs: 'none', xl: 'flex'}}
                                          flexDirection={'column'}
                                          justifyContent={'center'}>
                                        <div>
                                            <ThemeProvider theme={SIGN_GROUP_THEME}>
                                                <ButtonGroup variant="text">
                                                    <Button sx={{textTransform: 'none'}}>
                                                        <TYPOGRAPHY_MENU_XL item={SIGN_IN}/>
                                                    </Button>
                                                    <Button sx={{textTransform: 'none'}}>
                                                        <TYPOGRAPHY_MENU_XL item={SIGN_UP}/>
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
            </ScrollToColor>
        </Box>
    )
}

export default CustomAppBar;