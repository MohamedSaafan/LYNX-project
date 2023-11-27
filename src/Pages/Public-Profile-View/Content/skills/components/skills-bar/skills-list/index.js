import React, { useContext, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import styles from './style.module.css';
import theme from "../../../../../../../themes/theme";
import { Add } from "@mui/icons-material";
import { SkillsBarContext } from "../../../../../../../context/skills-bar-context";
import { SkillsContext } from "../../../../../../../context/skills-context";

const SkillsList = () => {
    const { skills } = useContext(SkillsContext);
    const { activeSkill, setActiveSkill } = useContext(SkillsBarContext);

    // Function to handle button click and update state
    const handleSkillClick = (skillNumber) => {
        setActiveSkill(skillNumber);
    };
    return (
        <React.Fragment>
            {skills?.map((skill, index) => (
                    <React.Fragment key={index}>
                        <Box className={styles.skill}
                            onClick={() =>
                                handleSkillClick(index+1)
                            }
                        >
                            <Box className={styles.skillNum}
                                sx={{
                                    border: '4px solid',
                                    borderColor: activeSkill === index+1 ? theme.palette.primary.main : theme.palette.lightgrey.lightgrey700,
                                    background:  activeSkill === index+1? theme.palette.primary.main : theme.palette.lightgrey.lightgrey00,
                                }}
                            >
                                <Typography variant="body1"
                                    sx={{
                                        color: activeSkill === index+1 ?theme.palette.lightgrey.lightgrey00 : theme.palette.darkgrey.darkgrey500,
                                        fontSize: '40px',
                                        fontWeight: '500',
                                        lineHeight: '48px', 
                                    }}
                                >{index+1}</Typography>    
                            </Box>
                            <Box className={styles.text}>
                                <Typography variant="body2"
                                    sx={{
                                        color: theme.palette.darkgrey.darkgrey400,
                                        fontSize: '12px',
                                    }}
                                >
                                    Skill #0{index+1}
                                </Typography>
                                <Typography variant="h4"
                                    sx={{
                                        color: activeSkill === index+1? theme.palette.primary.main : theme.palette.darkgrey.darkgrey600 ,
                                        fontSize: {
                                            xs: '18px',
                                            s: '20px',
                                        },
                                        fontWeight: '500',
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                                
                            </Box>
                        </Box>
                    </React.Fragment>
                )
            )}
        </React.Fragment>
    );
}

export default SkillsList;
