import Home from "./Pages/Home";
import {Paper} from "@mui/material";
import CustomAppBar from "./Components/CustomAppBar";


function App() {
  return (
    <Paper  style={{width : 'auto', height:'100vh', backgroundColor:"transparent" , border:'none', borderRadius:'none', padding:0, margin:0}}>
      <CustomAppBar/>
    </Paper>
  );
}

export default App;
