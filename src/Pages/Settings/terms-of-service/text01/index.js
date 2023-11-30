import React from "react";
import styles from './style.module.css';
import { Box, Typography} from "@mui/material";
import theme from "../../../../themes/theme";

const Text01 = () => {
    return (
        <Box className={styles.text}>
            <Typography variant="body1" component="h3"
                sx={{
                    color: theme.palette.darkgrey.darkgrey700,
                    fontSize: '24px',
                    fontWeight: '500',
                }}
            >Terms of Services</Typography>
            <Typography variant="body2"
                sx={{
                    color: theme.palette.darkgrey.darkgrey600,
                    fontWeight: '500',
                }}
            >Effective Date: 12/23/2034</Typography>
            <Typography variant="body2"
                sx={{
                    color: theme.palette.darkgrey.darkgrey600,
                }}
            >Welcome to LYNX! By accessing or using our mobile application (LYNX), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.</Typography>
        </Box>
    );
}
export default Text01;