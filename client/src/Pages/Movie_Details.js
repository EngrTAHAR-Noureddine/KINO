import {Box} from "@mui/material";
import dark from "../Asset/dark.jpg";
import React from "react";
import {STORY} from "../Themes/String/String";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";

export function Movie_Details() {
    return(
        <Box flexGrow={1} width={'100%'} height={'100%'}>
            <Header_Movie_Details title={'Dark'} rating={'9.7'} story={STORY} image={dark}/>



        </Box>
    )
}