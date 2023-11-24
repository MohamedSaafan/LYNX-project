import { Box, Button, Chip } from "@mui/material";
import React, {useContext, useState} from "react";
import styles from './style.module.css';
import { Clear, ClearRounded } from "@mui/icons-material";
import theme from "../../../../themes/theme";
import { searchContext } from "../../../../context/searchContext";

const useSearch = () => {
    const context = useContext(searchContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
  
const Filter = () => {
    const [filters, setFilters] = useState(['Category', 'Skills', 'Specialty', 'Age', 'Location', 'State']);

    const handleDelete = (index) => {
        // Create a copy of the array without the deleted item
        const updatedFilters = [...filters];
        updatedFilters.splice(index, 1);
    
        // Update the state with the new array
        setFilters(updatedFilters);
    };
    const handleClear = () => {
        
        // clear all filters
        setFilters([]);
    };
    const handleClick = () => {
        
    };

    return (
        <Box className={styles.filter}>
            {filters.map((item, index) => (
                <Chip
                    label={item}
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<ClearRounded />}
                    sx={{
                        bgcolor: theme.palette.lightgrey.lightgrey600,
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                />
            ))}
            <Button variant="text"
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '14px',
                    pl: '0',
                    pr: '0',
                }}
            >Re-Rank</Button>
            <Button variant="text"
                onClick={handleClear}
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '14px',
                    pl: '0',
                    pr: '0',
                    color: theme.palette.darkgrey.darkgrey300,
                }}
            >Clear Filters</Button>
        </Box>
    );
}

export default Filter;