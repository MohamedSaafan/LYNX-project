import { Box, Button, Divider, Link } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../themes/theme";
import Footer from "../../Footer/footer";
import Filter from "./filters";
import ResponsiveCarousel from "./Cards";
import { ChevronLeft } from "@mui/icons-material";
const SearchResult = () => {
    return (
        <Box className={styles.result}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey500,
                minHeight:'100vh',
            }}
        >
            <Box className={styles.container}
                sx={{
                    width: {
                        xs: '100%',
                    }
                }}
            >
                <Box className={styles.arrow}>
                    <Link href="/search" underline="none">
                        <Button variant="text" startIcon={<ChevronLeft />}
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                                textTransform: 'capitalize',
                                pl: '0px',
                            }}
                        >
                            Search
                        </Button>
                    </Link>
                </Box>
                <Filter/>
                <Divider></Divider>
                <ResponsiveCarousel />
            </Box>
            <Footer />
        </Box>
    );
}

export default SearchResult;