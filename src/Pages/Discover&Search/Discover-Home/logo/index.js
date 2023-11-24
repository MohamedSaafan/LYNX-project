import { Box, Typography } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../../themes/theme";
import image from '../../../../assets/images/LYNX-Logo-Low-Res2.png';

const Logo = () => {
    return (
        <Box className={styles.parent}>
            <Box className={styles.logo}>
                <img src={image} width="100%" height="100%" alert="lynx"/>
            </Box>    
            <Box className={styles.text}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey700
                    }}
                >EDITOR’S CHOICE PICKS</Typography>
            </Box>    
        </Box>    
    );
}

export default Logo;