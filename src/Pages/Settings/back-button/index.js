import React, { useContext } from "react";
import styles from './style.module.css';
import { Box, Button } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import theme from "../../../themes/theme";
import { SettingsContext } from "../../../context/settings-context";

const BackButton = ({ setOpen }) => {
    const {setOpenLanding} = useContext(SettingsContext)
    const handleClick = () => {
        setOpen(false);
        setOpenLanding(true)
    }
    return (
            <Box className={styles.arrow}
                sx={{bgcolor: theme.palette.lightgrey.lightgrey500,}}
            >
                <Button className={styles.backButton}
                    startIcon={<ChevronLeft />}
                    onClick={handleClick}
                    sx={{ color: theme.palette.darkgrey.darkgrey500 }}
                >Back</Button>
            </Box>        
    );
}
export default BackButton;