import { Box, Button, Chip, ClickAwayListener, Fade, IconButton, Link, Tooltip, Typography, capitalize, tooltipClasses } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from './styles.module.css';
import MyInfo from "./tool-tip";

const PersonalDetails = ({data}) => {
    return (
        <Box className={styles.communityStatus}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey00,
            }}
        >
            <Typography variant="body1"
                className={styles.heading}
                sx={{ color: theme.palette.darkgrey.darkgrey600, }}
            >
                Personal Details
            </Typography>
            <Box className={styles.content}>
                
                {data.map((item, index) => (
                    (item.label === "Age") ? (
                        <Box key={item.label} className={styles.same}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '8px'
                                }}
                            >
                                <Typography variant="body2"
                                    sx={{ color: theme.palette.darkgrey.darkgrey300 }}
                                >
                                    {item.label}
                                </Typography>
                                <MyInfo />
                            </Box>
                            <Chip label={item.value}
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey600
                                }}
                            />
                        </Box>
                    ): (
                        <Box key={item.label} className={styles.same}>
                            <Typography variant="body2"
                                sx={{color:theme.palette.darkgrey.darkgrey300}}
                            >
                                {item.label}
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey600,
                                }}
                            >
                                {item.value}
                            </Typography>
                        </Box>
                    )
                ))}
            </Box>

        </Box>
    );
}

export default PersonalDetails;
