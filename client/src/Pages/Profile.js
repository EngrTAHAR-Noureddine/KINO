import {Box} from "@mui/material";
import {Seperator_Bar} from "../Themes/Elements/Seperator_Bar";
import {BoxPersonPhoto} from "../Components/BoxPersonPhoto";
import {TabBarProfile} from "../Components/TabBarProfile";

export default function Profile() {
    const list = [1,2,3,4,5,6];
    return(
        <Box>
            <Seperator_Bar/>
            <BoxPersonPhoto/>
            <TabBarProfile list={list}/>

        </Box>
    )

}