import { Box, Typography, Link, Button } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from './style.module.css';


const AboutSkill =()=>{
    return (
        <Box className={styles.skillsCommunityStatus}
            sx={{
                border: '1px solid', 
                borderColor: theme.palette.danger.red300,
                background: theme.palette.lightgrey.lightgrey00,
            }}
        >
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    sx={{
                    color: theme.palette.darkgrey.darkgrey600,
                    }}
                >Description</Typography>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >No description yet!</Typography>
                </Box>
            </Box>
            <Box className={styles.skillsItem}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <Typography variant="body1"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        }}
                    >Portfolio Link</Typography>
                </Box>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >https://www.behance.net/pronabbiswas</Typography>
                </Box>
            </Box>
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    sx={{
                    color: theme.palette.darkgrey.darkgrey600,
                    }}
                >Skill Level</Typography>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >Not Selected yet!</Typography>
                </Box>
            </Box>
            <Box>
                <Button variant="contained"
                    sx={{
                        borderRadius: '25px',
                        border: '1px solid',
                        borderColor: theme.palette.lightgrey.lightgrey500,
                        bgcolor: theme.palette.lightgrey.lightgrey500,
                        color: theme.palette.darkgrey.darkgrey500,
                        textTransform: 'initial',
                        boxShadow: 'none',
                        
                    }}
                >0 Year of Experience</Button>
            </Box>
        </Box>        
    );
}

export default AboutSkill;