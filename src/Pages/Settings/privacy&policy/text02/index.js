import React from "react";
import styles from './style.module.css';
import { Box, Typography} from "@mui/material";
import theme from "../../../../themes/theme";

const Text02 = () => {
    return (
        <Box className={styles.text}>
            <Typography variant="body1" component="h4"
                sx={{
                    color: theme.palette.darkgrey.darkgrey600,
                    fontSize: '20px',
                    fontWeight: '500',
                }}
            >Information We Collect</Typography>
            <Typography variant="body2"
                sx={{
                    color: theme.palette.darkgrey.darkgrey500,
                }}
            >We may collect and process the following information:</Typography>
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Information You Provide</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >This may include information you provide when using the App, such as your name, email address, and any other information you choose to provide.</Typography>
            </Box>
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Automatically Collected Information</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >We may collect certain information automatically when you use the App, including your device type, device ID, IP address, and other usage information.</Typography>
            </Box>
        </Box>
    );
}
export default Text02;