import React from "react";
import { Box, Typography, Link, Button, Chip } from "@mui/material";
import theme from "../../../.././../../themes/theme";
import styles from './style.module.css';


const SkillStatus = ({skill}) => {
    return (
        <Box className={styles.skillsCommunityStatus}
            sx={{
                background: theme.palette.lightgrey.lightgrey00,
            }}
        >
            <Box className={styles.report}>
                <Link href="#" underline="none">
                    <Typography variant="body2"
                        sx={{
                            fontSize: '12px',
                            color: theme.palette.darkgrey.darkgrey300
                        }}
                    >Report</Typography>
                </Link>
            </Box>
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    className={styles.heading}
                    sx={{ color: theme.palette.darkgrey.darkgrey600 }}
                >Category</Typography>
                <Box className={styles.tags}>
                    {skill.category.length !== 0 && (
                        skill.category.map((cat, index) => (
                            <Chip label= {cat}
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey500,
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    p: '2px 5px'
                                }}
                            />
                        ))
                    )}
                    {skill.category.length === 0 && (
                        <Typography variant="body2"
                            sx={{
                            color: theme.palette.darkgrey.darkgrey400,
                            }}
                        >No category selected ye!</Typography>
                    )}
                </Box>
            </Box>
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    className={styles.heading}
                    sx={{ color: theme.palette.darkgrey.darkgrey600 }}
                >Skill</Typography>
                <Box className={styles.tags}>
                {skill.skill.length !== 0 && (
                        skill.skill.map((cat, index) => (
                            <Chip label= {cat}
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey500,
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    p: '2px 5px'
                                }}
                            />
                        ))
                    )}
                    {skill.skill.length === 0 && (
                        <Typography variant="body2"
                            sx={{
                            color: theme.palette.darkgrey.darkgrey400,
                            }}
                        >No skill selected ye!</Typography>
                    )}
                </Box>
            </Box>
            <Box className={styles.skillsItem}>
                <Typography variant="body1"
                    className={styles.heading}
                    sx={{ color: theme.palette.darkgrey.darkgrey600 }}
                >Specialty</Typography>
                <Box className={styles.tags}>
                {skill.specialty.length !== 0 && (
                        skill.specialty.map((cat, index) => (
                            <Chip label= {cat}
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey500,
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    p: '2px 5px'
                                }}
                            />
                        ))
                    )}
                    {skill.specialty.length === 0 && (
                        <Typography variant="body2"
                            sx={{
                            color: theme.palette.darkgrey.darkgrey400,
                            }}
                        >No specialty selected ye!</Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default SkillStatus;