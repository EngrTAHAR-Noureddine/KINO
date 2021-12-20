import {Box, Tabs,Tab} from "@mui/material";
import * as React from 'react';
import {TabPanel} from "../Themes/Elements/TabPanel";

export function TabBarProfile(prop) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant={'fullWidth'} value={value} onChange={handleChange}>
                    <Tab label="Item One"  />
                    <Tab label="Item Two"  />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} list={prop.list}/>
            <TabPanel value={value} index={1} list={prop.list}/>
            <TabPanel value={value} index={2} list={prop.list}/>
        </Box>
    );

}