import {Box} from "@mui/material";
import dark from "../Asset/dark.jpg";
import React from "react";
import {STORY} from "../Themes/String/String";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";

export function Movie_Details() {
    return(
        <Box flexGrow={1} width={'100%'} height={'100%'}>
            <Header_Movie_Details title={'Dark'} rating={'9.7'} story={STORY} image={dark}/>
            <Detail_movie/>

            <Box flexGrow={1} m={1} mx={5} height={'50vh'}>


            </Box>

        </Box>
    )
}

/*
<Box component="img"
                             width={'100%'} height={'100%'}
                             alt="img" src={dark}
                             bgcolor={'blue'}/>
* */

/*
<Grid container xs={12} width={'100%'} height={'100%'}
                              direction={'column'} justifyContent='center' alignItems='center'>
                            <Grid item xs={1} width={'100%'}height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={NAME_MOVIE+'Dark'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={CLASSIFICATION+'+16'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={COUNTRY+'German'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'} >
                                <TYPOGRAPHY_DETAILS item={LANGUAGE+'German'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={TYPE+'Drama,Action'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={QUALITY+'1080p,720p'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={DURATION+'45min'}/>
                            </Grid>
                            <Grid item xs={1} width={'100%'} height={'100%'}>
                                <TYPOGRAPHY_DETAILS item={SUBTITLES+'Arabic'}/>
                            </Grid>

                        </Grid>
* */