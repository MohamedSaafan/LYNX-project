import React, { useState } from "react";
import { Box, Button, Chip, Link } from "@mui/material";
import styles from './styles.module.css';
import { EmojiEvents } from "@mui/icons-material";
import theme from "../../../../../../themes/theme";
import styled from "@emotion/styled";
import img from '../../../../../../assets/images/primarySkills.png';
import MyInfo from "./tool-tip";

const SkillCoverImage = ({skill}) => {
    const [coverImage, setCoverImage] = useState(img);
    
    return (
        <Box className={styles.skillsImg}>
            <Box className={styles.tags}>
                {skill.editorChoice && <Button variant="contained" startIcon={<EmojiEvents />} sx={{ borderRadius: '25px' }}>EDITOR’S CHOICE</Button> } 
                {skill.pro && (
                    <Chip label="Pro" sx={{
                        bgcolor: theme.palette.tertiary.golden500,
                        color: theme.palette.lightgrey.lightgrey00,
                        fontSize: '14px',
                        fontWeight: '500',
                    }} />
                )}
                {skill.info !=='' &&<MyInfo />}
            </Box>
            <Box className={styles.primaryImg}
                sx={{
                    backgroundImage: `url(${coverImage})`,
                }}
            >
                <Box className={styles.options}>
                    {skill.primary && (
                        <Chip label="Primary Skill"
                            sx={{
                                bgcolor: theme.palette.warning.main,
                                color: theme.palette.lightgrey.lightgrey00,
                            }}
                        />
                    )}
                </Box>
            </Box>
            
        </Box>
    );
}

export default SkillCoverImage;