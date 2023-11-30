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
                >Account Registration</Typography>
                <Typography variant="body2"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >To use certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.</Typography>
            </Box>   
            <Box className={styles.frame}>
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontWeight: '500',
                    }}
                >Content and Conduct</Typography>
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
                <li>You are solely responsible for your use of the App and any content you submit or share.</li>
                <li>You agree not to use the App for any unlawful or unauthorized purpose.</li>
                <li>You agree not to post, share, or transmit any content that is defamatory, offensive, or violates any third-party rights.</li>
            </ul>
        </Box>
    );
}
export default Text03;