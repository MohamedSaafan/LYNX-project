import React from "react";
import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import styles from './style.module.css';
import AboutMe from "../../../About-Me/aboutMe";
import MySkills from "../../../My-Skills";
import ShoutOuts from "../../../Shout-Outs";

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
  
const DisplayTabs = ({value}) => {
    return (
        <Box className={styles.displayTabs}>
            <CustomTabPanel value={value} index={0}>
                <AboutMe />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <MySkills />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <ShoutOuts />
            </CustomTabPanel>
        </Box>  
    );
}

export default DisplayTabs;