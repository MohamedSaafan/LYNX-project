import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import theme from "../../../.././../themes/theme";
import styles from './style.module.css';


const SkillStatus = () => {
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
                >Category</Typography>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >No category selected ye!</Typography>
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
                    >Skill</Typography>
                </Box>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >No skill selected ye!</Typography>
                </Box>
            </Box>
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    sx={{
                    color: theme.palette.darkgrey.darkgrey600,
                    }}
                >Specialty</Typography>
                <Box className={styles.tags}>
                    <Typography variant="body2"
                        sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        }}
                    >No specialty selected ye!</Typography>
                </Box>
            </Box>
            <Box className={styles.edit}>
                <Link href="/editSkill" underline="none"  sx={{color:theme.palette.primary}}>
                    Edit
                </Link>
            </Box>
        </Box>
    );
}

export default SkillStatus;