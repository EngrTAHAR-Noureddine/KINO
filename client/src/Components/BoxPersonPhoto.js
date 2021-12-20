import {Box} from "@mui/material";
import {PhotoPerson} from "../Themes/Elements/PhotoPerson";
import {flex_styles} from "../Themes/Styles/styles";
import Actor from '../Asset/Actor.jpg';

export function BoxPersonPhoto() {
    return (
        <Box flexWrap={1} height={'50vh'} mb={5} style={flex_styles.row_center}>
            <PhotoPerson size={'50vh'} name={'James Spader'} photo={Actor}/>
        </Box>
    )
}