import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, FormLabel, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from './aboutEdit.module.css';
import theme from "../../../themes/theme";
import Link from '@mui/material/Link';
import { DateRange } from "@mui/icons-material";

const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    // Add more countries as needed
  ];



const AboutEdit = () => {

    const [selectedCountry, setSelectedCountry] = useState('United States');

    const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    };

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
    

    return (
        <Box className={styles.dialog}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection:'column',
                    gap:'32px',
                }}
            >
                <Box className={styles.communityStatus}>
                    <Box className={styles.details}>
                        <Typography variant="body1"
                            sx={{
                                color:theme.palette.darkgrey.darkgrey600,
                            }}
                        >
                            Personal Details
                        </Typography>
                        <Link href="#" underline="none"
                            sx={{
                                color: theme.palette.primary.main,
                            }}
                        >
                            Save
                        </Link>
                    </Box>
                    <Box className={styles.content}>
                        <TextField
                            label="My Real Name"
                            name="name"
                            value="Mohammed"
                            variant="outlined"
                            fullWidth
                            sx={{
                                    
                            }}
                        />
                        <TextField
                            label="My Nickname"
                            name="name"
                            value="Cody"
                            variant="outlined"
                            fullWidth
                            sx={{
                                    
                            }}
                        />
                        <TextField
                            select
                            label="Select Country"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            fullWidth
                            sx={{
                                
                            }}
                            >
                            {countries.map((country, index) => (
                                <MenuItem key={index} value={country}>
                                {country}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Tagline"
                            name="name"
                            value="🤘The World's Greatest Rock 'n' Roll Band"
                            variant="outlined"
                            fullWidth
                            sx={{
                                
                            }}
                        />
                        <TextField
                            label="Postal Code"
                            name="name"
                            value="2345"
                            variant="outlined"
                            fullWidth
                            sx={{
                                    
                            }}
                        />
                        <TextField
                            label="Phone Number"
                            name="name"
                            value="2345"
                            variant="outlined"
                            fullWidth
                            sx={{
                                    
                            }}
                        />
                        <TextField
                            label="Birth Year"
                            variant="outlined"
                            fullWidth
                            value={"birthYear"}
                            
                            sx={{
                                
                            }}

                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                        <DateRange
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
                </Box>
                <Divider />
                <Box >
                    <form className={styles.content} >
                        <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}
                            
                        >
                            I am looking to collaborate with:
                        </Typography>
                        <FormGroup
                            sx={{
                                display: 'flex',
                                gap: '20px',
                                alignSelf: 'stretch',

                            }}
                        >
                            <FormControlLabel control={<Checkbox defaultChecked />} label="X" />
                            <FormControlLabel control={<Checkbox />} label="X+" />
                            <FormControlLabel control={<Checkbox />} label="Y" />
                            <FormControlLabel control={<Checkbox />} label="Y+" />
                            <FormControlLabel control={<Checkbox />} label="Z" />
                            <FormControlLabel control={<Checkbox />} label="Z+" />
                        </FormGroup>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap:'12px',
                            }}
                        >
                            <Typography variant="body2" color={theme.palette.darkgrey.darkgrey500}
                                
                            >
                                Age Range 
                            </Typography>
                            <FormGroup sx={{
                                display: 'flex',    
                                flexDirection: 'row',
                                
                            }}>
                                <FormControlLabel control={<Checkbox />} label="X" />
                                <FormControlLabel control={<Checkbox />} label="X+" />
                                <FormControlLabel control={<Checkbox />} label="Y" />
                                <FormControlLabel control={<Checkbox />} label="Y+" />
                                <FormControlLabel control={<Checkbox />} label="Z" />
                                <FormControlLabel control={<Checkbox />} label="Z+" />
                            </FormGroup>
                        </Box>
                        <Button type="submit" variant="contained"
                            sx={{
                                pt: '10px', pb: '10px',
                                width: {
                                    xs: '100%',
                                    
                                }
                            }}
                        >
                            Finish
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>  
    );
}

export default AboutEdit