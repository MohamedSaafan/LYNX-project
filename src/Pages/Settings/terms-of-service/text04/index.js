import React from "react";
import styles from './style.module.css';
import { Box, Typography} from "@mui/material";
import theme from "../../../../themes/theme";

const Text03 = () => {
    return (
        <Box className={styles.text}>
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Intellectual Property</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >The App and its original content, features, and functionality are owned by [Your Company Name] and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any part of the App.</Typography>
            </Box>
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Termination</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >We reserve the right to terminate or suspend your account and access to the App at our sole discretion, with or without notice, for any reason, including a breach of these Terms.</Typography>
            </Box>
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Privacy</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >Our use of your information is governed by our Privacy Policy, which can be found [provide a link to your Privacy Policy].</Typography>
            </Box>
        </Box>
    );
}
export default Text03;