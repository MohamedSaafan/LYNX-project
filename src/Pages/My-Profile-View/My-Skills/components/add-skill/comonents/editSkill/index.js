import { Box, Button, Checkbox, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../../../../../themes/theme";
import { CheckBox } from "@mui/icons-material";

const EditSkill = () => {
    return (
        <Box className={styles.editSkill}>
            <Box className={styles.communityStatus}
                sx={{
                    width: {
                        md:'50%',
                    },
                    alignSelf: {
                        xs: 'stretch',
                        md: 'auto'
                    }
                }}
            >
                <Box className={styles.title}>
                    <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600} fontSize="18px">
                    Add/Edit Skills
                    </Typography>
                </Box>
                <Box className={styles.inputField}>
                    <FormControl
                        sx={{
                            width: {
                                xs: '100%',
                            }
                        }}
                    >
                        <InputLabel >Category</InputLabel>
                        <Select
                            label="Category"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Single select only</FormHelperText>
                    </FormControl>
                    <FormControl
                        sx={{
                            width: {
                                xs: '100%',
                            }
                        }}
                    >
                        <InputLabel >Select Skill</InputLabel>
                        <Select
                            label="Select Skill"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Single select only</FormHelperText>
                    </FormControl>
                    <FormControl
                        sx={{
                            width: {
                                xs: '100%',
                            }
                        }}
                    >
                        <InputLabel >Select Speciality</InputLabel>
                        <Select
                            label="Select Speciality"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Single select only</FormHelperText>
                    </FormControl>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        alignSelf: 'stretch',
                    }}  
                >
                    <Checkbox defaultChecked sx={{m:'0px', p:'0px'}}/>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            alignSelf: 'stretch',
                        }}  
                    >
                        <Typography variant="body2" color={theme.palette.darkgrey.darkgrey600}>
                        Add This Skill as a Primary Skill      
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default EditSkill;