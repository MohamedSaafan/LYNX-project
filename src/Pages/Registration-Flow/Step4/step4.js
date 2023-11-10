import React, { useState } from 'react';
import styles from './step4.module.css';
import { Button, TextField } from '@mui/material';

const Step4 = ({ onButtonClick }) => {
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
            />
            <Button type="submit" variant="contained" color="primary">
                Next
            </Button>
        </form>    
    );
}

export default Step4;