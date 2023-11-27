import { Box, Typography, Link, Button } from "@mui/material";
import React, { useContext } from "react";
import styles from './style.module.css';
import SkillsBar from "./components/skills-bar";
import SkillCoverImage from "./components/cover-image.js";
import AboutSkill from "./components/about";
import SkillStatus from "./components/status";
import { SkillsBarContext } from "../../../../context/skills-bar-context";
import { SkillsContext } from "../../../../context/skills-context";

const MySkills = () => { 
    const { activeSkill } = useContext(SkillsBarContext);
    const { skills } = useContext(SkillsContext);
    return (
        <Box className ={styles.mySkills}>
            <SkillsBar />
            <SkillCoverImage skill={ skills[activeSkill -1] } />            
            <SkillStatus skill={ skills[activeSkill -1] } />
            <AboutSkill skill={ skills[activeSkill -1] } />
        </Box>    
    );
}

export default MySkills;