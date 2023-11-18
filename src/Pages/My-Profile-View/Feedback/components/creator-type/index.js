import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography, Link } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from "./style.module.css";

const CreatorType = () => {
    return (
        <Box className={styles.creatorType}
            sx={{
                
            }}
        >
            <Box className={styles.content}>
                <Box className={styles.creatorType2}>
                    <Typography variant="h4"
                        sx={{
                            color: theme.palette.darkgrey.darkgrey600,
                            fontSize: '20px',
                            fontWeight: '500',
                        }}
                    >Choose Category</Typography>
                    <FormControl sx={{
                        color: theme.palette.darkgrey.darkgrey500, 
                        '& .MuiFormControlLabel-label': {
                            fontSize: '14px',
                        }
                    }}>
                        <RadioGroup
                            name="Category"
                        >
                            <FormControlLabel value="New feature suggestions" control={<Radio />} label="New feature suggestions" />
                            <FormControlLabel value="Bug reports & platform issues" control={<Radio />} label="Bug reports & platform issues" />
                            <FormControlLabel value="Login/registration issues" control={<Radio />} label="Login/registration issues" />
                            <FormControlLabel value="I’m getting spammed" control={<Radio />} label="I’m getting spammed" />
                            <FormControlLabel value="Business partnership proposal" control={<Radio />} label="Business partnership proposal" />
                            <FormControlLabel value="Nominate a friend to Editor’s Choice" control={<Radio />} label="Nominate a friend to Editor’s Choice" />
                            <FormControlLabel value="Flag inappropriate profile image" control={<Radio />} label="Flag inappropriate profile image" />
                            <FormControlLabel value="Report user" control={<Radio />} label="Report user" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box className={styles.options}>
                    <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}>Details</Typography>
                    <TextField
                        sx={{
                            background: theme.palette.lightgrey.lightgrey00,
                            width: {
                                md:'50%'
                            }
                        }}
                        fullWidth
                        id="outlined-textarea"
                        multiline
                        rows={4}
                    />   
                </Box>
                <Button variant="contained"
                    sx={{
                        p: '10px 24px',
                        textTransform: 'capitalize',
                        width: {
                            xs: '100%',
                            md: '50%'
                        }
                    }}
                >
                    <Link href="/MLBThanks" underline="none" color="inherit" > Submit </Link> 
                </Button>
            </Box>
        </Box>
    );
}

export default CreatorType;