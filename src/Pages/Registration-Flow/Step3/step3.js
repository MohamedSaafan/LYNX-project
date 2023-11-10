import React, { useState } from 'react';
import styles from './step3.module.css';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  

const Step3 = ({ onButtonClick }) => {
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
            
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            defaultValue="EUR"
            label="Age"
            onChange={handleChange}
             >
                {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
                ))}
            </Select>
            <Button type="submit" variant="contained" color="primary">
                Next
            </Button>
        </form>    
    );
}

export default Step3;


