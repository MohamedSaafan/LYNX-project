import React, { useContext, useEffect } from "react";
import styles from './style.module.css';
import { Box, Typography} from "@mui/material";
import theme from "../../../themes/theme";
import Footer from "../../Footer/footer";
import BackButton from "../back-button";
import { SettingsContext } from "../../../context/settings-context";
import Text01 from "./text01";
import Text02 from "./text02";
import Text03 from "./text03";
import Text04 from "./text04";

const TermsOfService = () => {
    const { openTermsOfService, setOpenTermsOfService } = useContext(SettingsContext);
    return (
        <Box className={styles.privacy_policy}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey500,
                display: openTermsOfService? 'flex': 'none',
            }}
        >
            <Box className={styles.container}>
                <BackButton setOpen={setOpenTermsOfService} />
                <Box className={styles.privacy}>
                    <Box className={styles.content}>
                        <Text01 />
                        <Text02 />
                        <Text03 />
                        <Text04 />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
export default TermsOfService;