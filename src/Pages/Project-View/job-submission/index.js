import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes/theme";
import { TaskOutlined } from "@mui/icons-material";
import styles from './style.module.css';

const JobSubmission = () => {
    return (
        <Box className={styles.jobSubmission}
        >
            <Box className={styles.container}
                sx={{
                    width:{
                        xs: '100%',
                        md: '50%',
                    }
                }}
            >
                <Box className={styles.icon}
                    sx={{
                        color: theme.palette.lightgrey.lightgrey00,
                    }}
                >
                    <TaskOutlined style={{ fontSize: '88px',}} />
                </Box>
                <Box className={styles.text}>
                    <Typography variant="h5" color={theme.palette.darkgrey.darkgrey700}
                        sx={{
                            textAlign: 'center',
                            fontWeight: '700',            
                        }}
                    >
                    Your project submission has been received!
                    </Typography>
                    <Typography variant="body1"
                        color={theme.palette.darkgrey.darkgrey500}
                        sx={{
                            textAlign:'center'
                        }}
                    >
                        You will receive a confirmation by email.    
                    </Typography>
                </Box>
                <Button variant="contained"
                    sx={{
                        p: '10px 24px',
                        textTransform: 'capitalize',        
                    }}
                >
                    Discover Other Creators
                </Button>
            </Box>
        </Box>
    );
}

export default JobSubmission;
