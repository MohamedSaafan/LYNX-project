import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../../../../themes/theme";
import { CheckBox} from "@mui/icons-material";
import Info from "./tooltipInfo";

const EditDescription = () => {
    return (
        <Box className={styles.editDescription}>
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
                    <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}
                        sx={{
                            fontSize: '18px',
                        }}
                    >
                    Edit Skills Informations
                    </Typography>
                    <Button variant="text"
                        sx={{
                            p: '1px 0px', 
                            textTransform: 'capitalize',
                            justifyContent: 'flex-end',
                        }}
                    >Save</Button>
                </Box>
                <Box className={styles.description}>
                    <Box className={styles.category}>
                        <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}>
                        Description of qualifications
                        </Typography>
                        <TextField 
                            multiline
                            sx={{
                                width:'100%',
                            }}
                        />
                    </Box>
                    <TextField
                        label="Input Portfolio Link"    
                        sx={{
                            width:'100%',
                        }}
                    />
                    <Box className={styles.category}>
                        <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}>
                        At what age did you start training in this skill?
                        </Typography>
                        <TextField 
                            sx={{
                                width:'30%',
                            }}
                        />
                    </Box>
                    <Box className={styles.category}>
                        <Typography variant="body1" color={theme.palette.darkgrey.darkgrey500}>
                        How would you assess your skill level?
                        </Typography>
                        <RadioGroup
                                row
                                sx={{color:theme.palette.darkgrey.darkgrey500, fontSize:'14px'}}
                            >
                                <FormControlLabel value="Beginner" control={<Radio />} label="Beginner" />
                                <FormControlLabel value="Intermediate" control={<Radio />} label="Intermediate" />
                                <FormControlLabel value="Advanced" control={<Radio />} label="Advanced" />
                                <FormControlLabel value="Master" control={<Radio />} label="Master" />
                                
                            </RadioGroup>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            alignSelf: 'stretch',
                        }}  
                    >
                        <Checkbox sx={{m:'0px', p:'0px'}}/>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                alignSelf: 'stretch',
                            }}  
                        >
                            <Typography variant="body2" color={theme.palette.darkgrey.darkgrey600}>
                            I only accept paid, market rate projects.      
                            </Typography>
                            <Info/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default EditDescription;