import React from "react";
import styles from './style.module.css';
import { Box, Typography} from "@mui/material";
import theme from "../../../../themes/theme";

const Text02 = () => {
    return (
        <Box className={styles.text}>
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Acceptance of Terms</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >By using the App, you acknowledge that you have read and understood these Terms and agree to be bound by them. If you do not agree to these Terms, please refrain from using the App.</Typography>
            </Box>
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Use of the App</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >You must be at least 13 years old to use the App. If you are under 13, please do not use the App</Typography>
            </Box>
        </Box>
    );
}
export default Text02;