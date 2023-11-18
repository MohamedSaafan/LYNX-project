import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from './style.module.css';
import theme from "../../../../../../themes/theme";
import { Check, Info, PieChart, PieChartOutline, PieChartOutlined } from "@mui/icons-material";
import Alert from "./alert";

const Skill = () => { 
    // Initial state representing three skills
    const [skills, setSkills] = useState([
        { num: 1, skillName: 'Technology', active: true },
        { num: 2, skillName: 'Fine Arts', active: false },
        { num: 3, skillName: 'Music', active: false },
    ]);

    // Function to handle button click and update state
    const handleItemClick = (index) => {
        setSkills((prevItems) =>
        prevItems.map((item, i) =>
            i === index ? { ...item, active: true } : { ...item, active: false }
        )
        );
    };
    
    return (
        <React.Fragment>
            {
                skills.map((skill, index) => (
                    <Box className={styles.skill}
                        key={index}
                        
                    >
                        <Box className={styles.skillNum}
                            sx={{
                                border: '4px solid',
                                borderColor: skill.active == true? theme.palette.primary.main : theme.palette.lightgrey.lightgrey700,
                                background:  skill.active == true? theme.palette.primary.main : theme.palette.lightgrey.lightgrey00,
                            }}
                            onClick={() => handleItemClick(index)}
                        >
                            <Typography variant="body1"
                                sx={{
                                    color: skill.active == true?theme.palette.lightgrey.lightgrey00 : theme.palette.darkgrey.darkgrey500,
                                    fontSize: '40px',
                                    fontWeight: '500',
                                    lineHeight: '48px', 
                                }}
                            >{skill.num}</Typography>
                            <Alert skill={skill.num} />
                                
                        </Box>
                        <Box className={styles.text}>
                            <Typography variant="body2"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey400,
                                    fontSize: '12px',
                                }}
                            >
                                Skill #0{skill.num}
                            </Typography>
                            <Typography variant="h4"
                                sx={{
                                    color: skill.active == true? theme.palette.primary.main : theme.palette.darkgrey.darkgrey600 ,
                                    fontSize: {
                                        xs: '18px',
                                        s: '20px',
                                    },
                                    fontWeight: '500',
                                }}
                            >
                                {skill.skillName}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </React.Fragment>
    );
}

export default Skill;
