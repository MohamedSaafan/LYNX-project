import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import styles from './style.module.css';
import theme from "../../../../themes/theme";
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
const ProfileTabs = ({ data }) => {

    const handleChange = (event, newValue) => {
        data.setValue(newValue);
    };

    return (
        <React.Fragment>
            <Box className={styles.tabs}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={data.value} onChange={handleChange} aria-label="basic tabs example"
                        sx={{
                            width: '100%',
                            '& .MuiTab-root': {
                                color: '#fff',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    backgroundColor: 'rgba(0,0,0,.1)', // Hover background color
                                    color: '#000',
                                    transition: '.3s ease-in-out',
                                },
                                '&.Mui-selected': {
                                    color: theme.palette.tertiary.golden500,
                                    '&:hover': {
                                        backgroundColor: 'inherit', // Hover background color                      
                                    },
                                },
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor:theme.palette.tertiary.golden500,
                                },
                        }}       
                    >
                    <Tab label="about me" {...a11yProps(0)} />
                    <Tab label="my skills" {...a11yProps(1)} />
                    <Tab label="shout outs" {...a11yProps(2)} />
                    </Tabs>
                </Box>
            </Box>  
        </React.Fragment>
    );
}

export default ProfileTabs;