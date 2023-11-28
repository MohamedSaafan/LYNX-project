import React from 'react';
import { Box, Chip, Container, Typography } from '@mui/material';
import theme from '../../../../themes/theme';
import LynxLogo from '../../../../assets/images/LYNX-Logo-Low-Res2.png';
import styles from './style.module.css';

const BasicLogo = () => {
    return (
        <Container className={styles.basicLogo}>
            <Container className={styles.content}>
                <Box className={styles.top}>
                    <img src={LynxLogo} className={styles.logo} alt="Logo" />
                    <Box className={styles.beta}>
                        <Typography variant="h4" align="center" color={theme.palette.darkgrey.darkgrey700}
                            sx={{
                                color: theme.palette.darkgrey.darkgrey500,
                                fontSize: '18px',
                                fontWeight: '500',
                            }}
                        >
                        Projects Board
                        </Typography> 
                        <Chip label="Beta"
                            sx={{
                                bgcolor: theme.palette.warning.main,
                                color: theme.palette.lightgrey.lightgrey00,
                                height: "auto",
                                fontSize: '10px',
                                padding: '4px 14px',
                                '& .css-6od3lo-MuiChip-label': {
                                    padding: '0px'
                                }
                            }}
                        />
                    </Box>
                </Box>
                <Typography variant="body1" align="center" color={theme.palette.darkgrey.darkgrey500}>
                    SUBMISSION FORM
                </Typography>      
            </Container>    
        </Container>
    );
}

export default BasicLogo;