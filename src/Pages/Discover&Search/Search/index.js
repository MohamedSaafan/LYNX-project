import { Box, Button, Divider } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../themes/theme";
import Logo from "./logo";
import InputFilter from "./input-filter";
import Footer from "../../Footer/footer";
const CreatorSearch = () => {
    return (
        <Box className={styles.search}
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
                <Divider
                    sx={{
                        width: {
                            xs: '100%',
                            
                            color: theme.palette.darkgrey.darkgrey500,
                        }
                    }}
                >Or</Divider>
                <InputFilter />
            </Box>
            <Footer />
        </Box>
    );
}

export default CreatorSearch;