import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import Result_List from "../Components/Result_List";
import {BoxPersonPhoto} from "../Components/BoxPersonPhoto";

export default function Actor() {
    const list = [1,2,3,4,5,6];
    return(
        <Box>
            <Seperator_Bar/>
            <BoxPersonPhoto/>
            <Result_List list={list}/>
        </Box>
    )

}