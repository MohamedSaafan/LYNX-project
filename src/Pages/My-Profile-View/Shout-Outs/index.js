import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes/theme";
import { PostAdd, PostAddOutlined, PostAddRounded, TaskAlt, TaskAltOutlined, TaskAltRounded, TaskAltSharp, TaskAltTwoTone } from "@mui/icons-material";
import styles from './style.module.css';
import Text from "./text";

const ShoutOuts = () => {
    return (
        <Box className={styles.aboutDetails}
            sx={{
                backgroundColor: theme.palette.lightgrey.lightgrey600,
            }}
        >
            <Box className={styles.tab}>
                <Button variant="contained"
                    sx={{
                        borderRadius: '25px',
                        textTransform: 'capitalize',
                    }}
                >Received</Button>    
                <Button variant="outlined"
                    sx={{
                        borderRadius: '25px',
                        textTransform: 'capitalize',
                        backgroundColor: theme.palette.lightgrey.lightgrey500,
                        color: theme.palette.darkgrey.darkgrey500,
                        border: '1px solid',
                        borderColor: theme.palette.lightgrey.lightgrey500,
                        boxShadow: 'none',
                    }}
                >Given</Button>    
                    
            </Box>
            <Text />
        </Box>
    );
}

export default ShoutOuts;
