import { Box, Typography, Link, Button } from "@mui/material";
import React from "react";
import theme from "../../../themes/theme";
import styles from './style.module.css';
import SkillStatus from "./components/status";
import AboutSkill from "./components/skill-about";
import Skills from "./components/skills";
import SkillCoverImage from "./components/skill-cover-image.js";

const MySkills = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                padding: '16px 24px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '16px',
                alignSelf: 'stretch',
                
            }}
        >
            <Skills />
            <Box className={styles.help}>
                <Link href='/helpWithClassificatin' underline="none">
                    <Typography variant="body2" sx={{ color: theme.palette.secondary.dark, textDecoration:'underline' }}>
                        Need help with your classifications?
                </Typography>
            </Link>
            </Box>
            <SkillCoverImage />            
            <SkillStatus />
            <AboutSkill />
            <Button variant="contained"
                sx={{
                    pt: '10px', pb: '10px',
                    width: {
                        xs: '100%',
                        
                    }
                }}
            >Add Skills</Button>
        </Box>    
    );
}

export default MySkills;