import React, { useState } from "react";
import { Box, Button, Chip, Link } from "@mui/material";
import styles from './styles.module.css';
import { Edit, EditNoteOutlined, EditOutlined, EmojiEvents, FileUploadOutlined } from "@mui/icons-material";
import theme from "../../../../../themes/theme";
import styled from "@emotion/styled";
import img from '../../../../../assets/images/primarySkills.png';

const SkillCoverImage = () => {
    const [coverImage, setCoverImage] = useState(img);
    
    return (
        <Box className={styles.skillsImg}>
            <Button variant="contained" startIcon={<EmojiEvents />} sx={{borderRadius:'25px'}}>EDITOR’S CHOICE</Button>
            <Box className={styles.primaryImg}
                sx={{
                    backgroundImage: coverImage? `url(${coverImage})`: 'none',
                }}
            >
                {!coverImage && (
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
                    {coverImage && (
                        <Link underline="none" href='/UCImage' > 
                            <Box className={styles.Cameraupload}>
                                <EditOutlined fontSize="16px" sx={{color:theme.palette.darkgrey.darkgrey400 }}/>
                            </Box>  
                        </Link>
                    )}
                </Box>
            </Box>
            
        </Box>
    );
}

export default SkillCoverImage;