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
            >LYNX Privacy and Policy</Typography>
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
            >LYNX is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, share,
                and safeguard your personal information in connection with your use of the [Your App Name] mobile application ("the App").
                By using the App,
                you consent to the practices described in this Privacy Policy.</Typography>
        </Box>
    );
}
export default Text01;