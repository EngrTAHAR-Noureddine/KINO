import React from 'react';
import {Box} from '@mui/material'
import {Custom_Carrousel} from "../Themes/Elements/Carousel";
import {MovieCardsChain} from "../Components/MovieCardsChain";


function Home() {
    return (
        <Box sx={{height:'auto',flexGrow: 1, padding:0,margin:0}}>
            <Custom_Carrousel/>
            <Box sx={{height:'100vh',flexGrow: 1, padding:0,margin:0}}>
                <MovieCardsChain/>
            </Box>
        </Box>

    )
}



export default Home