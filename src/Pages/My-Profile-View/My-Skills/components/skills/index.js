import { Box } from "@mui/material";
import styles from './style.module.css';
import Skill from "./skill";


const Skills = () => {
    return (
        <Box className ={styles.skills} >
            <Skill />
        </Box>
    );
}

export default Skills