import {Box, Grid} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import {flex_styles} from "../Themes/Styles/styles";
import {TYPOGRAPHY_SIGN_TITLE} from "../Themes/Styles/Typographies";
import {SIGN_IN} from "../Themes/String/String";
import {blue_0A, white_05} from "../Themes/Styles/Color";

export function LogIn(){
    return(
        <Box flexGrow={1}>
            <Seperator_Bar/>
            <Box flexGrow={1} style={flex_styles.row_center}>

                <Box width={{xs:'60vw',sm:'50vw', md:'40vw',lg:'30vw'}} height={'80vh'}>


                    <Box width={'inherit'} height={'6vh'} position={'absolute'}
                         zIndex={5} style={flex_styles.row_center}>

                            <Box height={'100%'} width={'60%'} bgcolor={blue_0A} borderRadius={1000}>
                                <TYPOGRAPHY_SIGN_TITLE title={SIGN_IN}/>
                            </Box>

                    </Box>
                    <Box width={'inherit'} height={'3vh'}/>

                    <Box width={'inherit'} height={'77vh'} bgcolor={white_05}
                         borderRadius={5}
                         position={'absolute'}
                         zIndex={0}>

                        <Grid container xs={12} direction={'column'} width={'100%'} height={'100%'} pt={5}>
                            <Grid item xs={2} bgcolor={'blue'} width={'100%'}></Grid>
                            <Grid item xs={2} bgcolor={'red'} width={'100%'}></Grid>
                            <Grid item xs={2} bgcolor={'green'} width={'100%'}></Grid>
                            <Grid item xs={2} bgcolor={'blue'} width={'100%'}></Grid>
                            <Grid item xs={3} bgcolor={'red'} width={'100%'}></Grid>
                            <Grid item xs={1} bgcolor={'green'} width={'100%'}></Grid>
                        </Grid>

                    </Box>

                </Box>

            </Box>
        </Box>
    )
}