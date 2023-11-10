import React, { useState } from 'react';
import styles from './step1.module.css';
import { Button, TextField } from '@mui/material';
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
            <TextField
                label="Enter Priority Code"
                name="priorityCode"
                value={formData.priorityCode}
                onChange={handleChange}
                variant="outlined"
                className={styles.textField}
                helperText="No priority code? No worries! Skip to the next step"
                fullWidth
            />
            <Button type="submit" variant="contained"
                sx={{width:100}}
            >
                Next
            </Button>
        </form>    
    );
}

export default Step1;