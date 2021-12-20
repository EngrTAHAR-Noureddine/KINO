import Home from "./Pages/Home";
import {Paper} from "@mui/material";
import CustomAppBar from "./Components/CustomAppBar";
import ListMovies from "./Pages/ListMovies";
import Search from "./Pages/Search";
import Actor from "./Pages/Actor";
import Profile from "./Pages/Profile";


function App() {
  return (
    <Paper  style={{width : 'auto', height:'100vh', backgroundColor:"transparent" , border:'none', borderRadius:'none', padding:0, margin:0}}>
      <CustomAppBar/>
      <Actor/>
    </Paper>
  );
}

export default App;
