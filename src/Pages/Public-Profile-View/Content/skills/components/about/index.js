import { Box, Typography, Link, Button, Chip } from "@mui/material";
import React from "react";
import theme from "../../../../../../themes/theme";
import styles from './style.module.css';

const AboutSkill =({skill})=>{
    return (
        <Box className={styles.skillsCommunityStatus}
            sx={{background: theme.palette.lightgrey.lightgrey00,}}
        >
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    className={styles.heading}
                    sx={{ color: theme.palette.darkgrey.darkgrey600 }}
                >Description</Typography>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >{skill.description}</Typography>
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
                        className={styles.heading}
                        sx={{ color: theme.palette.darkgrey.darkgrey600 }}
                    >Portfolio Link</Typography>
                </Box>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >{skill.link}</Typography>
                </Box>
            </Box>
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    className={styles.heading}
                    sx={{ color: theme.palette.darkgrey.darkgrey600 }}
                >Skill Level</Typography>
                <Box className={styles.tags}>
                    <Chip label={skill.level}
                        sx={{
                            color: theme.palette.lightgrey.lightgrey00,
                            bgcolor: theme.palette.tertiary.golden400,
                            fontSize: '14px',
                            fontWeight: '500',
                            p: '2px 5px'
                        }}
                    />
                </Box>
            </Box>
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    className={styles.heading}
                    sx={{ color: theme.palette.darkgrey.darkgrey600 }}
                >Experience</Typography>
                <Box className={styles.tags}>
                    <Chip label= {skill.experience + ' Years of Experience'}
                        sx={{
                            color: theme.palette.lightgrey.lightgrey00,
                            bgcolor: theme.palette.secondary.main,
                            fontSize: '14px',
                            fontWeight: '500',
                            p: '2px 5px'
                        }}
                    />
                </Box>
            </Box>
        </Box>        
    );
}

export default AboutSkill;