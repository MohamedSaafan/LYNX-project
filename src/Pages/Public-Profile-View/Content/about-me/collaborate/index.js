import { Box, Button, Chip, ClickAwayListener, Fade, IconButton, Link, Tooltip, Typography, capitalize, tooltipClasses } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from './styles.module.css';

const Collaborate = ({data}) => {
    return (
        <Box className={styles.communityStatus}
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey00,
            }}
        >
            <Box className={styles.content}>
                <Typography variant="body"
                    className={styles.heading}
                    sx={{color:theme.palette.darkgrey.darkgrey600,}}
                >I am looking to collaborate with:</Typography>
                <Box className={styles.tags}
                    sx={{
                        flexWrap: 'wrap',
                    }}
                >
                    {data.map((collaborate, index) => (
                        <Chip key={index}
                            label={collaborate}
                            sx={{
                                p: '2px 5px',
                                fontWeight: '500',
                                fontSize: '14px',
                                color: theme.palette.darkgrey.darkgrey500,
                            }}
                        />
                    ))}
                </Box>
            </Box>
            <Box className={styles.content}>
                <Typography variant="body"
                    className={styles.heading}
                    sx={{color:theme.palette.darkgrey.darkgrey600,}}
                >Age Range</Typography>
                <Box className={styles.tags}
                    sx={{
                        flexWrap: 'wrap',
                    }}
                >
                    <Chip label="X"
                        sx={{ color: theme.palette.darkgrey.darkgrey500}}
                    />
                    <Chip label="Y"
                        sx={{ color: theme.palette.darkgrey.darkgrey500}}
                    />
                    <Chip label="Z"
                        sx={{ color: theme.palette.darkgrey.darkgrey500}}
                    />
                    <Chip label="X+"
                        sx={{ color: theme.palette.darkgrey.darkgrey500}}
                    />
                    <Chip label="Y+"
                        sx={{ color: theme.palette.darkgrey.darkgrey500}}
                    />
                </Box>
            </Box>
                    
        </Box>
    );
}

export default Collaborate;
