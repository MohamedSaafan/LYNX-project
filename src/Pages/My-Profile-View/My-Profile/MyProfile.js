import React from "react";

import PropTypes from 'prop-types';
import { Box, Button, Container, Tab, Tabs, Typography} from "@mui/material";
import styles from './MyProfile.module.css';
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import theme from "../../../themes/theme";
import Footer from "../../Footer/footer";
import AboutMe from "../About-Me/aboutMe";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <Box
                sx={{
                    width: {
                        xs: '100vw',
                        md: '50vw',
                    }
                }}    
            >
                {children}
          </Box>
        )}
      </div>
    );
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  


const MyProfile = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: '1 0 0',
                alignSelf: 'stretch',
            }}
        >
            <Box className={styles.cardDetails}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    bgcolor: theme.palette.lightgrey.lightgrey600,
                }}
            >
                <Box className={styles.myCardDetails}>
                    <Box className={styles.userDetails}>
                        <Box className={styles.details}>
                            <Box className={styles.image}>
                                <AddPhotoAlternateOutlined
                                    sx={{
                                        width: '40px',
                                        height: '40px',
                                        flexShrink: '0',
                                        color:theme.palette.darkgrey.darkgrey400,
                                    }}
                                />
                            </Box>
                            <Box className={styles.name}>
                                <Typography variant="h6"
                                    sx={{
                                        color:theme.palette.lightgrey.lightgrey00,
                                    }}
                                >Cody Fisher’s Card</Typography>
                                <Button variant="outlined"
                                    sx={{
                                        borderRadius: '25px',
                                        textTransform: 'initial',
                                        p: '6px 16px',
                                        color: theme.palette.darkgrey.darkgrey500,
                                        borderColor: theme.palette.lightgrey.lightgrey00,
                                        backgroundColor: theme.palette.lightgrey.lightgrey00,
                                        
                                    }}
                                >Make LYNX Better</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={styles.tabs}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
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
                </Box>
                <Box className={styles.displayTabs}>
                    <CustomTabPanel value={value} index={0}>
                        <AboutMe />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </Box>
            <Footer />
        </Box>  
    );
}

export default MyProfile;