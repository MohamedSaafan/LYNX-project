import { Box, Typography } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../../themes/theme";
import image from '../../../../assets/images/LYNX-Logo-Low-Res2.png';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const Logo = () => {
    return (
        <Box className={styles.parent}>
            <Box className={styles.logo}>
                <img src={image} width="100%" height="100%" alert="lynx"/>
            </Box>    
            <Box className={styles.text}>
                <Box
                    className={styles.searchForm}
                    component="form"
                    sx={{
                        bgcolor: theme.palette.lightgrey.lightgrey600,
                    }}
                    >
                    <InputBase
                        sx={{
                            color: theme.palette.darkgrey.darkgrey600,
                            flex: 1,
                        }}
                        placeholder="Name or Tagline Search"
                    />
                    <IconButton type="button" sx={{color: theme.palette.darkgrey.darkgrey500,p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    
                </Box>
            </Box>    
        </Box>
    );
}

export default Logo;