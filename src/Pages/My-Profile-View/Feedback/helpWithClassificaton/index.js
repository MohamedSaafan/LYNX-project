import { Box, Button } from "@mui/material";
import React from "react";
import theme from "../../../../themes/theme";
import styles from "./style.module.css";
import { ChevronLeft } from "@mui/icons-material";
import Footer from "../../../Footer/footer";
import CreatorType2 from "../components/creator-type2";
import Logo2 from "../components/logo2";

const HelpWithClassification = () => {
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
                <Logo2 />
                <CreatorType2 />
            </Box>
            <Footer />
        </Box>
    );
}

export default HelpWithClassification;