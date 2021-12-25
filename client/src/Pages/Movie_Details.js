import {Box} from "@mui/material";
import dark from "../Asset/dark.jpg";
import React from "react";
import {ACTOR, STORY} from "../Themes/String/String";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";
import {TYPOGRAPHY_SEARCH_RESULT} from "../Themes/Styles/Typographies";
import {flex_styles} from "../Themes/Styles/styles";
import {AvatarActor} from "../Themes/Elements/Avatar_Actor";

export function Movie_Details() {
    return(
        <Box flexGrow={1} width={'100%'} height={'100%'}>
            <Header_Movie_Details title={'Dark'} rating={'9.7'} story={STORY} image={dark}/>
            <Detail_movie/>

            <Box flexGrow={1} m={1} mx={5} height={'auto'} bgcolor={'darkcyan'}>
                <Box flexGrow={1} height={'5vh'} style={flex_styles.col_center} px={2} bgcolor={'darkred'}>
                    <TYPOGRAPHY_SEARCH_RESULT item={ACTOR}/>
                </Box>
                <Box flexGrow={1} height={'auto'} bgcolor={'darkgreen'} p={2}>
                    <AvatarActor/>
                </Box>
            </Box>

        </Box>
    )
}