import React from "react";
import { Box, Button, Chip } from "@mui/material";
import styles from './styles.module.css';
import { EmojiEvents } from "@mui/icons-material";
import theme from "../../../../../themes/theme";
import styled from "@emotion/styled";

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
  

const PrimarySkill = () => {
    return (
        <Box className={styles.skillsImg}>
            <Button variant="contained" startIcon={<EmojiEvents />} sx={{borderRadius:'25px'}}>EDITOR’S CHOICE</Button>
            <Box className={styles.primaryImg}>
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

export default PrimarySkill;