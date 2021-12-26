import {Box, IconButton, Typography,} from "@mui/material";
import dark from "../Asset/dark.jpg";
import React from "react";
import {ACTOR, COMMENTS, COMMENTS_NOT_EXIST, EPISODES, HATE_IT, LIKE_IT, SEASONS, STORY} from "../Themes/String/String";
import {Header_Movie_Details} from "../Components/Header_Movie_Details";
import {Detail_movie} from "../Components/detail_movie";
import {AvatarActor} from "../Themes/Elements/Avatar_Actor";
import {SectionDetail} from "../Components/section_detail";
import {CONTAINER_NUMBER_BUTTON} from "../Themes/Elements/Buttons";
import {white_100} from "../Themes/Styles/Color";
import {WatchDownloadMovie} from "../Themes/Elements/movie_watch_&_ download_section";
import {TYPOGRAPHY_NOT_EXIST} from "../Themes/Styles/Typographies";

import {CircleRounded} from '@mui/icons-material';
import {RatingBar} from "../Themes/Elements/rating_bar";
import {flex_styles} from "../Themes/Styles/styles";
import {PoppinsFont} from "../Themes/Fonts/Fonts";
import {ScoreCounter} from "../Themes/Elements/Score_counter";


export function Movie_Details() {
    const list  = [1,2,3,4,5,6];
    return(
        <Box flexGrow={1} width={'100%'} height={'100%'}>
            <Header_Movie_Details title={'Dark'} rating={'9.7'} story={STORY} image={dark}/>


            <Box flexGrow={1} height={'10vh'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} bgcolor={'blue'} mx={5}>

                <Box
                     width={{lg:'60%', xl:'50%'}}
                     height={'100%'} display={{xs:'none',lg:'flex'}} justifyContent={'left'} alignItems={'center'}
                     bgcolor={'red'}>

                    <Box width={'20%'} height={'100%'} bgcolor={'darkkhaki'} style={flex_styles.col_center}>
                        <Typography variant={'h6'}
                                    textAlign={'right'}
                                    fontFamily={PoppinsFont}
                                    color={white_100}
                                    width={'100%'}
                                    sx={{wordWrap: "break-word" }}>
                            {HATE_IT}
                        </Typography>
                    </Box>
                    <Box width={'60%'} height={'100%'} bgcolor={'green'}>
                        <RatingBar/>
                    </Box>
                    <Box width={'20%'} height={'100%'} bgcolor={'darkkhaki'} style={flex_styles.col_center}>
                        <Typography variant={'h6'}
                                    textAlign={'left'}
                                    fontFamily={PoppinsFont}
                                    color={white_100}
                                    width={'100%'}
                                    sx={{wordWrap: "break-word" }}>
                            {LIKE_IT}
                        </Typography>
                    </Box>

                </Box>

                <Box display={{xs:'flex',lg:'none'}} width={'30%'}height={'100%'} bgcolor={'green'} >
                    <ScoreCounter/>
                </Box>

                <Box width={{xs:'30%', lg:'20%'}} height={'100%'} bgcolor={'red'}>

                </Box>


            </Box>




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

            <WatchDownloadMovie/>

            <SectionDetail title={COMMENTS}>
                <TYPOGRAPHY_NOT_EXIST text={COMMENTS_NOT_EXIST}/>
            </SectionDetail>

        </Box>
    )
}