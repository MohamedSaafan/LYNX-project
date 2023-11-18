import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from "./style.module.css";
import logo from "../../../../../assets/images/LYNX-Logo-Low-Res2.png";


const Logo2 = () => {
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
                    >Help With Classification</Typography>
                    <Box className={styles.frame}>
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                                textAlign: 'center',
                            }}
                        >Hey, don't worry if you are stuck - we are here to helpWith over 600 specialties and growing, your unique skill may seem buried in our list.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Logo2;