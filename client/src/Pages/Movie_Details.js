import {Box, Grid, Typography,} from "@mui/material";
import dark from "../Asset/dark.jpg";
import React from "react";
import {ACTOR, COMMENTS, COMMENTS_NOT_EXIST, EPISODES, SEASONS, STORY} from "../Themes/String/String";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";
import {AvatarActor} from "../Themes/Elements/Avatar_Actor";
import {SectionDetail} from "../Components/section_detail";
import {CONTAINER_NUMBER_BUTTON} from "../Themes/Elements/Buttons";
import {ListDownload} from "../Components/list_download";
import {VideoPlay} from "../Components/Video_play";
import {white_10, white_100, white_30} from "../Themes/Styles/Color";


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

            <SectionDetail title={SEASONS}>
                {list.map((item)=>(

                   <CONTAINER_NUMBER_BUTTON item={item}/>

                ))}
            </SectionDetail>
            <SectionDetail title={EPISODES}>
                {list.map((item)=>(

                    <CONTAINER_NUMBER_BUTTON item={item}/>

                ))}
            </SectionDetail>

            <Box flexGrow={1} mx={5} height={{xs:'90vh',lg:'70vh'}} bgcolor={white_10} borderRadius={5}>
                <Grid container xs={12}
                      width={'100%'}
                      height={'100%'}
                      direction={{xs:'column', lg:'row'}}
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      sx={{flexWrap: 'wrap'}}

                >
                    <Grid item height={'100%'} width={'100%'} xs={3} sm={3} lg={3} xl={2}>
                        <ListDownload list={list}/>
                    </Grid>
                    <Grid item  height={'100%'} width={'100%'} xs={9} sm={9} lg={9} xl={10}>
                        <VideoPlay/>
                    </Grid>
                </Grid>
            </Box>


            <SectionDetail title={COMMENTS}>
                <Typography p={1} variant={'h6'} color={white_100} textAlign={'center'}> {COMMENTS_NOT_EXIST} </Typography>
            </SectionDetail>

        </Box>
    )
}