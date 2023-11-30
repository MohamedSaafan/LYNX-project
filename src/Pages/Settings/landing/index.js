import React, { useContext } from "react";
import styles from './style.module.css';
import { Box} from "@mui/material";
import Divider from '@mui/material/Divider';
import theme from "../../../themes/theme";
import Top from "./top";
import Menu from "./menu";
import Footer from "../../Footer/footer";
import { SettingsContext } from "../../../context/settings-context";

const Landing = () => {
    const { openLanding } = useContext(SettingsContext);
    return (
        <Box className={styles.landing}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey500,
                display: openLanding? "flex": 'none',
            }}
        >
            <Box className={styles.container}>
                <Box className={styles.sideDrawer}>
                    <Top />
                    <Divider sx={{width:'100%'}}/>
                    <Menu />
                </Box>
                <Footer />
            </Box>
        </Box>
    );
}
export default Landing;