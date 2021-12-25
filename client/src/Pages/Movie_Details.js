import {Box, Grid} from "@mui/material";
import dark from "../Asset/dark.jpg";
import React from "react";
import {ACTOR, STORY} from "../Themes/String/String";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";
import {TYPOGRAPHY_SEARCH_RESULT} from "../Themes/Styles/Typographies";
import {flex_styles} from "../Themes/Styles/styles";
import {AvatarActor} from "../Themes/Elements/Avatar_Actor";
import {grey_36, white_30} from "../Themes/Styles/Color";
import {SectionDetail} from "../Components/section_detail";

export function Movie_Details() {
    const list  = [1,2,3,4,5,6];
    return(
        <Box flexGrow={1} width={'100%'} height={'100%'}>
            <Header_Movie_Details title={'Dark'} rating={'9.7'} story={STORY} image={dark}/>
            <Detail_movie/>
            <SectionDetail title={ACTOR}>
                {list.map((item)=>(

                    <AvatarActor item={item}/>

                ))}
            </SectionDetail>



        </Box>
    )
}