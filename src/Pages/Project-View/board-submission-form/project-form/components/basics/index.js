import React, { useState } from 'react';
import { Box, TextField, TextareaAutosize, Typography } from '@mui/material';
import theme from '../../../../../../themes/theme';
import styles from './style.module.css';

const Basics = (props) => {
    const {
        title,
        setTitle,
        subheading,
        setSubheading,
        description,
        setDescription,
        country,
        setCountry
    } = props;

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleSubheading = (event) => {
        setSubheading(event.target.value);
    };
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleCountry = (event) => {
        setCountry(event.target.value);
    };

    return (
        <Box className={styles.basics}>
            <Box className={styles.content}>
                <Typography variant='h4'
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,
                        fontSize: '20px',
                        fontWeight: '500',
                    }}
                >Basics</Typography>
            </Box>
            <Box className={styles.inputField}>
                <TextField
                    sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                    label="Project Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={handleTitle}
                />
            </Box>
            <Box className={styles.options}>
                <Box className={styles.inputField}>
                    <TextField
                        sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                        label="Subheading"
                        variant="outlined"
                        fullWidth
                        value={subheading}
                        onChange={handleSubheading}
                    />
                </Box>
                <Box className={styles.options}>
                    <Typography variant='body1'
                        sx={{
                            color: theme.palette.darkgrey.darkgrey600,
                            fontWeight: '500',
                        }}
                    >Project description</Typography>
                    <TextareaAutosize
                        style={{
                            width: '100%',
                            minHeight: 100,
                            maxWidth: '100%',
                            minWidth: '100%',
                            borderRadius: '4px',
                            border: '1px solid '+ theme.palette.lightgrey.lightgrey800,
                            outlineColor: theme.palette.primary.main,
                            padding: '12px 13px',
                        }}
                        value={description}  // Controlled component: Set value from state
                        onChange={handleDescription}  // Handle changes
                    />
                </Box>
                <Box className={styles.country}>
                    <TextField
                        sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                        label="Your Location"
                        variant="outlined"
                        fullWidth
                        value={country}
                        onChange={handleCountry}
                    />
                </Box>         
            </Box>
        </Box>
    );
}

export default Basics;