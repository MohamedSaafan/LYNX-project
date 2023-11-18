import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from "./style.module.css";
import logo from "../../../../../assets/images/LYNX-Logo-Low-Res2.png";


const Logo = () => {
    return (
        <Box className={styles.logo}>
            <Box className={styles.content}>
                <img src={logo} width= '238px' height= '79.056px' alert="logo" />
                <Box className={styles.text}>
                    <Typography variant="h4"
                        sx={{
                            color: theme.palette.darkgrey.darkgrey700,
                            fontWeight: '700',
                            fontSize: '20px',
                        }}
                    >Make LYNX Better</Typography>
                    <Box className={styles.frame}>
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                                textAlign: 'center',
                            }}
                        >Thanks for taking an interest in the LYNX community!</Typography>
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                                textAlign:'center',
                            }}
                        >Please share your experiences, issues and suggestions with us below:</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Logo;