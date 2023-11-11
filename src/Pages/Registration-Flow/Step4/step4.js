import React, { useState } from 'react';
import styles from './step4.module.css';
import { Button, Container, TextField, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import theme from '../../../themes/theme';
import { useNavigate } from 'react-router-dom';

const Step4 = ({ onButtonClick }) => {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation if needed
    
        // Call the callback function to move to the next step
        handleClick();
    };

    const navigate = useNavigate();
    const handleClick = () => {
        // Navigate to the desired route when the button is clicked
        navigate('/thanks');
    };
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}
                
            >
                LYNX is a collaboration platform for creators to discover other creators. Who would you like to collab with? (Choose as many as you like!)
            </Typography>
            <List sx={{ width: '100%', mb:'24px', mt:'24px', m:0}}>
            {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
            <ListItem
                key={value}
                disablePadding
                sx={{padding:0}}
            >
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon >
                    <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
            </ListItem>
            );
        })}
            </List>
            <Button type="submit" variant="contained"
                sx={{pt:'10px', pb:'10px'}}
            >
                Finish
            </Button>
        </form>
    );
}

export default Step4;