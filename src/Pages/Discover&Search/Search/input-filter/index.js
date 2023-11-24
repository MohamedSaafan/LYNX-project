import { Autocomplete, Box, Button, Checkbox, FormControlLabel, FormGroup, InputAdornment, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from './style.module.css';
import theme from "../../../../themes/theme";
import { FilterAltOutlined } from "@mui/icons-material";

const skills = [
    'Musician',
    'Fashion',
    'UX designer',
];
const Specialty = [
    'Musician',
    'Fashion',
    'UX designer',
];
const Country = [
    'USA',
    'Fashion',
    'UX designer',
];
const State = [
    'New York',
    'Fashion',
    'UX designer',
];
const ages = [
    'X',
    'Y',
    'Z',
    'X+',
    'Y+',
]

const InputFilter = () => {
    const [category, setCategory] = useState('');
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedEditorChoice, setSelectedEditorChoice] = useState(false);
    const [selectedProsOnly, setSelectedProsOnly] = useState(false);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const handleChangeSkill = (event, value) => {
        setSelectedSkill(value);
    };
    const handleChangeSpecialty = (event, value) => {
        setSelectedSpecialty(value);
    };
    const handleChangeCountry = (event, value) => {
        setSelectedCountry(value);
    };
    const handleChangeState = (event, value) => {
        setSelectedState(value);
    };
    const handleChangeAge = (age) => {
        setSelectedAge(age);
    };
    const handleChangeEditorChoice = () => {
        setSelectedEditorChoice(!selectedEditorChoice);
    };
    const handleChangeProsOnly = () => {
        setSelectedProsOnly(!selectedProsOnly);
    };
    
    return (
        <Box className={styles.parent}>
            <Box className={styles.content}>
                <TextField
                    sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                    label="Category (Music, Fine Arts, Film/TV)"
                    variant="outlined"
                    fullWidth
                    value={category}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <FilterAltOutlined color="action" />
                        </InputAdornment>
                        ),
                    }}
                />
                <Autocomplete
                    sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                    options={skills}
                    getOptionLabel={(option) => option}
                    value={selectedSkill}
                    onChange={handleChangeSkill}
                    fullWidth
                    renderInput={(params) => (
                        <TextField {...params} label="Skill" variant="outlined" />
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
                        <TextField {...params} label="Specialty" variant="outlined" />
                    )}
                />
                <Box className={styles.country}>
                    <Autocomplete
                        sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                        className={styles.selectCountry}
                        options={Country}
                        getOptionLabel={(option) => option}
                        value={selectedCountry}
                        onChange={handleChangeCountry}
                        renderInput={(params) => (
                            <TextField {...params} label="Select Country" variant="outlined" />
                        )}
                    />
                    <Autocomplete
                        sx={{bgcolor: theme.palette.lightgrey.lightgrey00}}
                        className={styles.selectState}
                        options={State}
                        getOptionLabel={(option) => option}
                        value={selectedState}
                        onChange={handleChangeState}
                        renderInput={(params) => (
                            <TextField {...params} label="State" variant="outlined" />
                        )}
                    />
                </Box>
                <Box className={styles.age}>
                    <Typography variant="body"
                        sx={{
                            color:theme.palette.darkgrey.darkgrey600,        
                        }}
                    >Age Range</Typography>
                    <Box className={styles.tags}
                        sx={{
                            flexWrap: 'wrap',
                        }}
                    >
                        {ages.map((age, index) => (
                            <Button key={index}
                                onClick={()=> handleChangeAge(age)}
                                sx={{
                                    borderRadius: '25px',
                                    border: '1px solid',
                                    borderColor: theme.palette.lightgrey.lightgrey500,
                                    background: theme.palette.lightgrey.lightgrey600,
                                    textTransform: 'capitalize',
                                    padding: '6px 16px',
                                    color: theme.palette.darkgrey.darkgrey500,
                                    minWidth:'auto',
                                }}
                            >{age}</Button>    
                        ))}
                    </Box>
                </Box>
                <Box className={styles.checkbox}
                    sx={{
                        color: theme.palette.darkgrey.darkgrey500,
                    }}
                >
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedEditorChoice}
                                    onChange={handleChangeEditorChoice}
                                    name="Editor Choice"
                                    sx={{color: theme.palette.darkgrey.darkgrey200}}
                                />
                            }
                            label="Only Editor’s Choice"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedProsOnly}
                                    onChange={handleChangeProsOnly}
                                    name="Pros only"
                                    sx={{color: theme.palette.darkgrey.darkgrey200}}
                                />
                            }
                            label="Pros Only"
                        />
                    </FormGroup>
                </Box>
                <Link href="/searchResult" underline="none" width="100%" textAlign={'center'}>
                    <Button variant="contained"
                        fullWidth
                        sx={{
                            p: '10px 24px',
                            textTransform: 'capitalize',
                        }}
                    >
                    Submit
                    </Button>
                </Link>
            </Box>    
        </Box>
    );
}

export default InputFilter;