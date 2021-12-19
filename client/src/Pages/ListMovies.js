import {Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
import {MovieCard} from "../Themes/Elements/MovieCard";
import {flex_styles} from "../Themes/Styles/styles";
import {SHORTCUT_LIST_BUTTON} from "../Themes/Elements/Buttons";
import {black_10, white_10} from "../Themes/Styles/Color";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";


function ListMenu(prop){
    return (
        <Grid item  xs={2} lg={4} height={'inherit'} width={'inherit'}
              bgcolor={'transparent'}
              style={flex_styles.col_center}
        >
            <Box height={'80%'} width={'90%'} bgcolor={black_10}
                 mx={'auto'}
                 borderRadius={{xs:1,lg:5}}>
                <Grid container xs={12} height={'100%'} width={'100%'}
                      direction={{xs:'row',lg:'column'}}
                      justifyContent='left'
                      alignItems='center'
                      p={1}
                >

                    {
                        prop.list.map((item)=>(
                            <Grid borderRadius={2} item xs={3} lg={2} mb={1} mr={1}
                                  height={'inherit'}
                                  width={'inherit'}>
                                <SHORTCUT_LIST_BUTTON item={item}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

        </Grid>
    )
}

function Result(prop){
    return (
        <Box sx={{height:'auto',flexGrow: 1, padding:1,margin:0}} style={flex_styles.row_center}>
        <Grid container height={'inherit'} width={'inherit'} xs={12} flexGrow={1} spacing={3} style={flex_styles.row_center}>
            {

                prop.list.map((item)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={flex_styles.row_center}>
                        <MovieCard/>
                    </Grid>))

            }
        </Grid>
    </Box>)
}

function Filter_List() {
    return(
        <Grid item  xs={10} lg={8} height={'inherit'} width={'inherit'}>

        </Grid>
    )
}


function ListMovies() {
    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const list_menu = ['List','2021' ,'Trending'];
    return(
        <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
            <Seperator_Bar/>

            <Box sx={{height:'50vh',flexGrow: 1, padding:0,margin:0 ,mb:5}}
                 style={flex_styles.row_center}>

                <Box borderRadius={10} sx={{height:'50vh',width:{xs:'70vw', lg:'50vw'}, padding:0,margin:0}}>

                    <Grid container xs={12} flexGrow={1}
                          borderRadius={10}
                          bgcolor={white_10}
                          height={'100%'}
                          width={'100%'}
                          direction={{xs:'column-reverse',lg:'row'}}
                          justifyContent='center'
                          alignItems='center'>

                        <Filter_List/>
                        <ListMenu list={list_menu}/>

                    </Grid>

                </Box>
            </Box>
            <Result list={list}/>
        </Box>
    )
}

export default ListMovies;

