import React, { useContext, useEffect } from "react";
import styles from './style.module.css';
import { Box, Typography} from "@mui/material";
import theme from "../../../themes/theme";
import Footer from "../../Footer/footer";
import BackButton from "../back-button";
import { SettingsContext } from "../../../context/settings-context";
import SubscriptionCard from "./subscription-card";

const SubscriptionStatus = () => {
    const { openSubStatus, setOpenSubStatus } = useContext(SettingsContext);
    return (
        <Box className={styles.subStatus}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey500,
                display: openSubStatus? 'flex': 'none',
            }}
        >
            <Box className={styles.container}>
                <BackButton setOpen={setOpenSubStatus} />
                <Box className={styles.details}>
                    <Box className={styles.content}>
                        <Typography variant="body1" component="h3"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey700,
                                fontSize: '24px',
                                fontWeight: '500',
                            }}
                        >Subscription Status</Typography>
                        <SubscriptionCard />
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
export default SubscriptionStatus;