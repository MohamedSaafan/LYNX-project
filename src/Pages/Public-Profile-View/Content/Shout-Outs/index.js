import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../../themes/theme";
import styles from './style.module.css';
import Text from "./text";

const ShoutOuts = () => {
    const [showReceived, setShowReceived] = useState(true);
    const [showGiven, setShowGiven] = useState(false);
    const handleReceived = () => {
        setShowReceived(true);
        setShowGiven(false);
    }
    const handleGiven = () => {
        setShowGiven(true);
        setShowReceived(false);
    }

    const styleActive = {
        borderRadius: '25px',
        textTransform: 'capitalize',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.lightgrey.lightgrey00,
        boxShadow: 'none',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        p: '6px 16px',
        minWidth: 'auto',
    }
    const styleNotActive = {
        borderRadius: '25px',
        textTransform: 'capitalize',
        backgroundColor: theme.palette.lightgrey.lightgrey500,
        color: theme.palette.darkgrey.darkgrey500,
        boxShadow: 'none',
        border: '1px solid',
        borderColor: theme.palette.lightgrey.lightgrey500,
        p: '6px 16px',
        minWidth: 'auto',
    }

    return (
        <Box className={styles.aboutDetails}
            sx={{backgroundColor: theme.palette.lightgrey.lightgrey600,}}
        >
            <Box className={styles.content}>
                <Box className={styles.tab}>
                    <Button variant="outlined"
                        onClick={handleReceived}
                        sx={showReceived? styleActive: styleNotActive}
                    >Received</Button>    
                    <Button variant="outlined"
                        onClick={handleGiven}
                        sx={showGiven? styleActive: styleNotActive}
                    >Given</Button>    
                </Box>
                <Text showReceived={showReceived} showGiven={showGiven} />    
            </Box>
        </Box>
    );
}

export default ShoutOuts;
