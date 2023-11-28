import React, { useState } from 'react';
import { Autocomplete, Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material';
import theme from '../../../../../../themes/theme';
import styles from './style.module.css';
import { Add } from '@mui/icons-material';


const Contact = (props) => {
    const { emailAddress, setEmailAddress } = props;
    
    const handleEmailAddress = (event) => {
        setEmailAddress(event.target.value);
    };

    return (
        <Box className={styles.contact}>
            <Typography variant='body1'
                sx={{
                    color: theme.palette.darkgrey.darkgrey500,
                    fontWeight: '500',
                }}
            >Contact</Typography>
            <Box className={styles.inputField}>
                <TextField 
                    label= "Email Address"
                    value={emailAddress}
                    onChange={handleEmailAddress}
                    fullWidth
                    sx={{
                        bgcolor: theme.palette.lightgrey.lightgrey00,
                    }}
                />
            </Box>
        </Box>
    );
}

export default Contact;