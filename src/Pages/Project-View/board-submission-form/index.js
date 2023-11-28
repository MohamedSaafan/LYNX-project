import { Box, Container } from "@mui/material";
import React from "react";
import BasicLogo from "./logo";
import theme from "../../../themes/theme";
import styles from './style.module.css';
import ProjectForm from "./project-form";
import Footer from "../../Footer/footer";

const BoardSubmissionForm = () => {
    return (
        <Box className={styles.boardSubmission}
            sx={{bgcolor: theme.palette.lightgrey.lightgrey500}}
        >
            <Box
                sx={{
                    width: {
                        xs: '100%',
                        md: '50%',
                    }
                }}
            >
                <BasicLogo />
                <ProjectForm />
            </Box>
            <Footer />
        </Box>
    );
}

export default BoardSubmissionForm;