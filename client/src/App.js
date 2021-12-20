import Home from "./Pages/Home";
import {Paper} from "@mui/material";
import CustomAppBar from "./Components/CustomAppBar";
import ListMovies from "./Pages/ListMovies";
import Search from "./Pages/Search";


function App() {
  return (
    <Paper  style={{width : 'auto', height:'100vh', backgroundColor:"transparent" , border:'none', borderRadius:'none', padding:0, margin:0}}>
      <CustomAppBar/>
      <Search/>
    </Paper>
  );
}

export default App;
