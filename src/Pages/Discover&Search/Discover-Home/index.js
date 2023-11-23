import { Box } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../themes/theme";

const DiscoverHome = () => {
    return (
        <Box className={styles.home}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey500,
            }}
        >

        </Box>
    );
}

export default DiscoverHome;