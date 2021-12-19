import {Box, Button, Grid, Typography} from "@mui/material";
import {MovieCard} from "../Themes/Elements/MovieCard";


export function MovieCardsChain(prop) {
    const list = [1,2,3,4,5,6];
    return(
        <Grid container xs={12}
              flexGrow={1}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              bgcolor={'white'}
              px={2}
        >
            <Grid item xs={12} flexGrow={1} height={"5vh"} justifyContent={'left'} flexDirection={'row'} display={'flex'}
                    sx={{borderBottomColor:'red', borderBottom:1}}
                    >
                <Grid container xs={12} px={2}>
                    <Grid item xs={10} height={"100%"} justifyContent={'left'} flexDirection={'row'} display={'flex'}>
                        <Typography bgcolor={'red'} justifyContent={'center'} flexDirection={'column'} display={'flex'} >
                            Movies
                        </Typography>
                    </Grid>
                    <Grid item xs={2} height={"100%"} justifyContent={'right'} flexDirection={'row'} display={'flex'}>
                        <Button>
                            More
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={12}
                  flexGrow={1}
                  height={"auto"}
                  bgcolor={'orange'}
                  p={1}
            >
                <Grid container xs={12} flexGrow={1} spacing={2} justifyContent={'center'} flexDirection={'row'} display={'flex'}>
                    {

                        list.map((item)=>(
                            <Grid item xs={6} md={4} xl={2}
                                  justifyContent={'center'} flexDirection={'row'} display={'flex'}
                                 >
                                <MovieCard/>
                            </Grid>))

                    }
                </Grid>


            </Grid>
        </Grid>
    )
}