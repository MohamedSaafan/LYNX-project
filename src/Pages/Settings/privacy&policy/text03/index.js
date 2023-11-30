import React from "react";
import styles from './style.module.css';
import { Box, Typography} from "@mui/material";
import theme from "../../../../themes/theme";

const Text03 = () => {
    return (
        <Box className={styles.text}>
            <Typography variant="body1" component="h4"
                sx={{
                    color: theme.palette.darkgrey.darkgrey600,
                    fontSize: '20px',
                    fontWeight: '500',
                }}
            >How We Use Your Information</Typography>
            <Typography variant="body2"
                sx={{
                    color: theme.palette.darkgrey.darkgrey500,
                }}
            >We may use the information we collect for various purposes, including</Typography>
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
            
            <ul className={styles.frame}
                style={{
                    color: theme.palette.darkgrey.darkgrey500,
                }}
            >
                <li>To provide, maintain, and improve the App.</li>
                <li>To respond to your requests and inquiries.</li>
                <li>To send you updates and information about the App.</li>
                <li>To monitor and analyze usage patterns and trends.</li>
            </ul>
        </Box>
    );
}
export default Text03;