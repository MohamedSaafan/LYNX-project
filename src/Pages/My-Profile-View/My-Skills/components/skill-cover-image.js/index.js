import React, { useState } from "react";
import { Box, Button, Chip, Link } from "@mui/material";
import styles from './styles.module.css';
import { EmojiEvents, FileUploadOutlined } from "@mui/icons-material";
import theme from "../../../../../themes/theme";
import styled from "@emotion/styled";
import UploadCoverImage from "./upload-cover-image";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

const SkillCoverImage = () => {
    const [haveImage, setHaveImage] = useState(false);

    return (
        <Box className={styles.skillsImg}>
            <Button variant="contained" startIcon={<EmojiEvents />} sx={{borderRadius:'25px'}}>EDITOR’S CHOICE</Button>
                <Box className={styles.primaryImg}>
                    {!haveImage && (
                        <Box className={styles.primarySkills}
                            sx={{
                                borderColor: theme.palette.lightgrey.lightgrey800,
                                background: theme.palette.lightgrey.lightgrey00,
                            }}
                        >
                            <Box className={styles.content}>
                                <Link underline="none" href="/UCImage">
                                    <Button variant="text" startIcon={<FileUploadOutlined />}
                                        sx={{
                                            color: theme.palette.darkgrey.darkgrey400,
                                            textTransform: 'capitalize',

                                        }}
                                    >
                                    Upload skill cover image
                                    </Button>

                                </Link>
                            </Box>
                        </Box>
                    )}
                    <Box className={styles.options}>
                        <Chip label="Primary Skill"
                            sx={{
                                bgcolor: theme.palette.warning.main,
                                color: theme.palette.lightgrey.lightgrey00,
                            }}
                        />
                    </Box>
                </Box>
            
        </Box>
    );
}

export default SkillCoverImage;