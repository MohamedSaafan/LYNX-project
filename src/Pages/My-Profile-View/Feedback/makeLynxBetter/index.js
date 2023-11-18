import { Box, Button } from "@mui/material";
import React from "react";
import theme from "../../../../themes/theme";
import styles from "./style.module.css";
import { ChevronLeft } from "@mui/icons-material";
import Logo from "../components/logo";
import CreatorType from "../components/creator-type";
import Footer from "../../../Footer/footer";

const MakeLynxBetter = () => {
    return (
        <Box
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey500,
            }}
        >
            <Box className={styles.container}>
                <Box className={styles.arrow}>
                    <Button variant="text" sx={{textTransform:'capitalize',color:theme.palette.darkgrey.darkgrey500}} startIcon={<ChevronLeft />}>
                        Back
                    </Button>
                </Box>
                <Logo />
                <CreatorType />
            </Box>
            <Footer />
        </Box>
    );
}

export default MakeLynxBetter;