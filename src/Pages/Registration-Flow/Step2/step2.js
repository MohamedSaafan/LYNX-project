import React, { useState } from 'react';
import styles from './step2.module.css';
import { Button, Container, TextField, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import theme from '../../../themes/theme';



const Step2 = ({ onButtonClick }) => {
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
        onButtonClick();
    };
    
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}
                
            >
                Choose up to 3 creator types which best describe your skill sets:
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
                sx={{
                    pt: '10px', pb: '10px',
                    width: {
                        xs: '100%',
                        md:'50%',
                    }
                }}
            >
                Next
            </Button>
        </form>
    );
}

export default Step2;