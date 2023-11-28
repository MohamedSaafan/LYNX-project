import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from '../../../assets/images/LYNX-Logo-Low-Res2.png'
import theme from "../../../themes/theme";
import { TaskAlt, TaskAltOutlined, TaskAltRounded, TaskAltSharp, TaskAltTwoTone } from "@mui/icons-material";
import styles from './style.module.css';
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/footer";

const ProjectLanding = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Use navigate to go to the "/projct-board-submission" route
        navigate('/project-board-submistion');
    }

    return (
        <Box className={styles.landing}>
            <Box className={styles.container}
                sx={{backgroundColor: theme.palette.lightgrey.lightgrey500,}}
            >
                <Box className={styles.logo}>
                    <img src={logo} width="234px" height="80px" alt="LYNX Logo"/>
                    <Typography variant="body1"
                        sx={{
                            color: theme.palette.darkgrey.darkgrey500,
                            fontSize: '18px',
                        }}
                    >
                        Do you have a project looking for collaborators?
                    </Typography>
                </Box>
                <Box className={styles.button}>   
                    <Button variant="contained"
                        onClick={handleClick}
                        sx={{
                            p: '10px 24px',
                            textTransform: 'capitalize',
                            width: '245px',   
                        }}
                    >
                        submit
                    </Button>
                </Box>
            </Box>
                <Footer />
        </Box>
    );
}

export default ProjectLanding;
