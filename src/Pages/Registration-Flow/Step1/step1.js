import React, { useState } from 'react';
import styles from './step1.module.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import theme from '../../../themes/theme';

const Step1 = ({ onButtonClick }) => {
    const [formData, setFormData] = useState({
        priorityCode: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation if needed
    
        // Call the callback function to move to the next step
        onButtonClick();
    };
    
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap:'2px',
                }}
            >
                <TextField
                    label="Enter Priority Code"
                    name="priorityCode"
                    value={formData.priorityCode}
                    onChange={handleChange}
                    variant="outlined"
                    className={styles.textField}
                    
                    fullWidth
                    sx={{
                        backgroundColor: theme.palette.lightgrey.lightgrey00,
                        width: {
                            md:'50%',
                        }    
                    }}
                />
                <Typography variant='caption'>No priority code? No worries! Skip to the next step</Typography>

            </Box>
            <Button type="submit" variant="contained"
                sx={{
                    width: '183px',
                    p: '10px 24px',
                    width: {
                        xs: '183px',
                        sm:'25%',
                    }
                }}
            >
                Next
            </Button>
        </form>    
    );
}

export default Step1;