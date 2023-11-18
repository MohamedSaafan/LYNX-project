import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography, Link } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from "./style.module.css";

const CreatorType2 = () => {
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
                    >Details</Typography>
                </Box>
                <Box className={styles.options}>
                    <Typography variant="body1" color={theme.palette.darkgrey.darkgrey600}>
                        Give us a short description of what skill you are looking for in our list...
                    </Typography>
                    
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
                    <Link href="/HWCThanks" underline="none" color="inherit" > Submit </Link> 
                </Button>
            </Box>
        </Box>
    );
}

export default CreatorType2;