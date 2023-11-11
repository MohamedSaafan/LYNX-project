import React, { useState } from 'react';
import styles from './step3.module.css';
import { Box, Button, MenuItem, TextField, Typography, InputAdornment, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import theme from '../../../themes/theme';
import DateRangeIcon from '@mui/icons-material/DateRange';

const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    // Add more countries as needed
  ];

const pronouns = [
    'He/Him',
    'She/Her',
    'They/Them',
    // Add more pronoun options as needed
];

const Step3 = ({ onButtonClick }) => {
    const [selectedPronouns, setSelectedPronouns] = useState('');
    
    const handlePronounsChange = (event) => {
        setSelectedPronouns(event.target.value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation if needed
    
        // Call the callback function to move to the next step
        onButtonClick();
    };
    
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    };
    
    const [postalCode, setPostalCode] = useState('');

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };
    
  const [birthYear, setBirthYear] = useState('');
  const handleBirthYearChange = (event) => {
    setBirthYear(event.target.value);
  };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Typography variant="body1"
                color={theme.palette.darkgrey.darkgrey600}    
            >
                Give us a few basic details about you:
            </Typography>
            <Box sx={{ mb: '24px', mt: '24px', display: 'flex', flexDirection:'column', gap:'16px'}}>
                <TextField
                    select
                    label="Select Country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    fullWidth
                    sx={{
                        backgroundColor: '#fff',
                        width: {
                            md:'50%',
                        }
                    }}
                    >
                    {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                        {country}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                label="Postal Code"
                variant="outlined"
                fullWidth
                value={postalCode}
                onChange={handlePostalCodeChange}
                    sx={{
                        backgroundColor: '#fff', width: '50%',
                        width: {
                            md:'50%',
                        }
                    }}
                
                />

                <TextField
                    label="Birth Year"
                    variant="outlined"
                    fullWidth
                    value={birthYear}
                    onChange={handleBirthYearChange}
                    sx={{
                        backgroundColor: '#fff',
                        width: {
                            md:'50%',
                        }
                    }}

                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                                <DateRangeIcon
                                    sx={{color: theme.palette.darkgrey.darkgrey300}}
                                />
                          </InputAdornment>
                        ),
                    }}
                />

                <Box
                    sx={{display:'flex', flexDirection:'column', gap:'2px'}}
                >
                    <FormLabel id="demo-row-radio-buttons-group-label"
                        sx={{color:theme.palette.darkgrey.darkgrey500}}
                    >
                        Choose your pronouns
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{color:theme.palette.darkgrey.darkgrey500, fontSize:'14px'}}
                    >
                        <FormControlLabel value="He/Him" control={<Radio />} label="He/Him" />
                        <FormControlLabel value="She/Her," control={<Radio />} label="She/Her," />
                        <FormControlLabel value="They/Them" control={<Radio />} label="They/Them" />
                        
                    </RadioGroup>
                </Box>
            </Box>

            <Button type="submit" variant="contained"
                sx={{
                    pt: '10px', pb: '10px',
                    width: {
                        xs: '100%',
                        md:'25%',
                    }
                }}
            >
                Next
            </Button>
        </form>    
    );
}

export default Step3;


