import {Avatar, Box, Collapse, Typography} from "@mui/material";
import {flex_styles} from "../Styles/styles";
import {useState} from "react";
import {blue_0A, white_EC} from "../Styles/Color";
import {PoppinsFont} from "../Fonts/Fonts";
import actor from "../../Asset/Actor.jpg";
export function AvatarActor(prop) {
    const [state, setState] = useState(false);
    const onMouseEnter = ()=>(
        setState(true)
    );
    const onMouseLeave = ()=>(
        setState(false)
    );

    return(

        <Box width={(state)?400:100}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             height={100} style={flex_styles.row_center} borderRadius={1000} bgcolor={'blue'}>
            {/*<Collapse orientation="horizontal" in={state}>*/}

            <Box display={(state)?'flex':'none'}
                 justifyContent={'center'}
                 flexDirection={'column'}
                 alignItems={'center'}
                 px={1}
                 width={300} height={100} borderRadius={1000}>

                <Typography width={'90%'} textAlign={'center'} color={blue_0A}
                            fontFamily={PoppinsFont} fontWeight={'bold'} sx={{textDecoration:'underline'}}>
                    TAHAR
                </Typography>
                <Box width={'90%'} height={5}/>
                <Typography width={'90%'} textAlign={'center'}
                            color={white_EC} fontFamily={PoppinsFont} fontWeight={'normal'}>
                    TAHAR
                </Typography>

            </Box>

                {/*</Collapse>*/}
            <Avatar sx={{width:100, height:100}} src={actor}/>

        </Box>

    )

}