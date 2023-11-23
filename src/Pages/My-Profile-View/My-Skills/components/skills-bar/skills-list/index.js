import { Box, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from './style.module.css';
import theme from "../../../../../../themes/theme";
import { Add, Check, Info, PieChart, PieChartOutline, PieChartOutlined, PlusOne } from "@mui/icons-material";
import Alert from "./alert";
import CreatedSkill from "./created";
import NotCreatedSkill from "./not-created";
import ActiveSkill from "./active";

const SkillsList = () => { 
    // Initial state representing three skills
    const [skills, setSkills] = useState([
        { num: 1, skillName: 'Technology', active: false, created: true },
        { num: 2, skillName: 'Music', active: true, created: true },
        { num: 3, skillName: '', active: false, created: false },
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

                    <React.Fragment key={index}>
                        {(() => {
                            if (skill.created === true && skill.active === true) {
                                return <ActiveSkill skill={skill}/>
                                
                            }
                            else if (skill.created === true && skill.active === false) {
                                return <CreatedSkill skill={skill} />
                                
                            }
                            else if (skill.created === false ) {
                                return <NotCreatedSkill skill={skill} />
                                
                            }
                        })()}

                    </React.Fragment>
                ))}
            </React.Fragment>
    );
}

export default SkillsList;
