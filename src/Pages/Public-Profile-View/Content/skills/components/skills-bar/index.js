import { Box } from "@mui/material";
import styles from './style.module.css';
import SkillsList from "./skills-list";


const SkillsBar = () => {
    return (
        <Box className ={styles.skills} >
            <SkillsList />
        </Box>
    );
}

export default SkillsBar