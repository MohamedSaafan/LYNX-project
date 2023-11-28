import React, { useState } from 'react';
import { Autocomplete, Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material';
import theme from '../../../../../../themes/theme';
import styles from './style.module.css';
import { Add } from '@mui/icons-material';

const Category = [
    'Musician',
    'Fashion',
    'UX designer',
];
const Skill = [
    'Musician',
    'Fashion',
    'UX designer',
];
const Specialty = [
    'Musician',
    'Fashion',
    'UX designer',
];

const Roles = (props) => {
    const {
        selectedSkill,
        setSelectedSkill,
        selectedSpecialty,
        setSelectedSpecialty,
        selectedCategory,
        setSelectedCategory,
    } = props;
    
    const handleChangeCategory = (event, newValue) => {
        setSelectedCategory(newValue);
    };
    const handleChangeSkill = (event, newValue) => {
        setSelectedSkill(newValue);
    };
    const handleChangeSpecialty = (event, newValue) => {
        setSelectedSpecialty(newValue);
    };

    return (
        <Box className={styles.roles}>
            <Box className={styles.content}>
                <Typography variant='body1'
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                        fontWeight: '500',
                    }}
                >Roles #1</Typography>
            </Box>
            <Box className={styles.inputField}>
                <Autocomplete
                    sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                    options={Category}
                    getOptionLabel={(option) => option}
                    value={selectedCategory}
                    onChange={handleChangeCategory}
                    fullWidth
                    renderInput={(params) => (
                        <TextField {...params} label="Select Category" variant="outlined" />
                    )}
                />         
                <Autocomplete
                    sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                    options={Skill}
                    getOptionLabel={(option) => option}
                    onChange={handleChangeSkill}
                    value={selectedSkill}
                    fullWidth
                    renderInput={(params) => (
                        <TextField {...params} label="Select Skill" variant="outlined" />
                    )}
                />         
                <Autocomplete
                    sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                    options={Specialty}
                    getOptionLabel={(option) => option}
                    value={selectedSpecialty}
                    onChange={handleChangeSpecialty}
                    fullWidth
                    renderInput={(params) => (
                        <TextField {...params} label="Select Specialty" variant="outlined" />
                    )}
                />        
                <Button variant='text' 
                    startIcon={<Add />}
                    sx={{
                        color: theme.palette.darkgrey.darkgrey400,
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: '400',
                        padding: 0,
                    }}
                >Add New Role</Button>
            </Box>
        </Box>
    );
}

export default Roles;