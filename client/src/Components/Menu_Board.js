import {flex_styles} from "../Themes/Styles/styles";
import {Box, Grid} from "@mui/material";
import {black_10, white_10} from "../Themes/Styles/Color";
import {FILTER_LIST, LIST_SHORTCUTS} from "../Themes/String/String";
import React, {useState} from "react";
import {FILTER_BUTTON, SHORTCUT_LIST_BUTTON} from "../Themes/Elements/Buttons";
import {CustomPopUpMenu} from "../Themes/Elements/CustomPopUpMenu";

export default function Menu_Board() {
    return(
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
                    <ListMenu list={LIST_SHORTCUTS}/>
                </Grid>
            </Box>
        </Box>
    )
}


function ListMenu(prop){
    return (
        <Grid item  xs={2} lg={4} height={'inherit'} width={'inherit'}
              bgcolor={'transparent'}
              style={flex_styles.col_center}
        >
            <Box height={'80%'} width={'90%'} bgcolor={black_10}
                 mx={'auto'}
                 borderRadius={{xs:1,lg:5}}>
                <Grid container xs={12} height={'100%'} width={'100%'} direction={{xs:'row',lg:'column'}}
                      justifyContent='left' alignItems='center' p={1}>
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

function Filter_List() {
    const FilterList = FILTER_LIST;
    const [selector,setSelect]=useState({
        Language:'Language',
        Status:'Status',
        Quality:'Quality',
        Year:'Year',
        Country:'Country',
        Category:'Category',
        Type:'Type'
    });
    const callback = (item,where)=>{
        setSelect({...selector,[where]:item});
    }
    return(
        <Grid item  xs={10} lg={8} height={'inherit'} width={'inherit'}
              borderRadius={10}
              style={flex_styles.col_center}>
            <Box height={'90%'} width={'90%'} mx={'auto'}>
                <Grid   container width={"100%"} height={"100%"} direction={'column'}
                        justifyContent={'center'} alignItems={'center'}>

                    <Grid item xs={10} width={'inherit'} height={'inherit'}>
                        <Box width={'100%'} height={'100%'} style={flex_styles.row_center} flexWrap={'wrap'}>
                            {
                                FilterList.map((item)=>(
                                    <Box m={1}>
                                        <CustomPopUpMenu selected={item.type} list={item.list} callback={callback}/>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={2} width={'inherit'} height={'inherit'} style={flex_styles.col_center} px={2}>
                        <FILTER_BUTTON/>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}
