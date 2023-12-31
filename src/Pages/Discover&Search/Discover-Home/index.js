import { Box, Button, Link } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../themes/theme";
import Logo from "./logo";
import Items from "./items";
import Footer from "../../Footer/footer";
import MyButton from "./button";

const DiscoverHome = () => {
    return (
        <Box className={styles.home}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey500,
                minHeight:'100vh',
            }}
        >
            <Box className={styles.container}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '75%',
                        md: '50%',
                    }
                }}
            >
                <Logo />
                <Items />
                <MyButton />
            </Box>
            <Footer />
        </Box>
    );
}

export default DiscoverHome;