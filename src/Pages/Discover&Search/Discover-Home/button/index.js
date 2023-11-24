import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import styles from './style.module.css';

const MyButton = () => {
    return (
        <Box className={styles.button}>
            <Link href="/search" underline="none" width="100%">
                <Button variant="contained"
                    fullWidth
                    sx={{
                        p: '10px 24px',
                        textTransform: 'capitalize',
                    }}
                >
                Customize My Search
                </Button>
            </Link>
        </Box>    
    );
}

export default MyButton;