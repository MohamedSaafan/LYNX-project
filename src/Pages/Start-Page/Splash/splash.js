import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import theme from '../../../themes/theme';
import LynxLogo from '../../../assets/images/LYNX-Logo-Low-Res1.png';
import styles from './splash.module.css'
import { Link } from 'react-router-dom';


const Splash = () => {
    return (
        <Link to='/login' style={{textDecoration:'none'}}>
            <div className={styles.splash}>
                <Container className={styles.container}>
                    <img src={LynxLogo} className={styles.logo} alt="Logo" width="100" height="100" />
                    <Box className={styles.text}>
                        <Typography variant="body1"
                            color={theme.palette.lightgrey.lightgrey00}
                        >App Tag Line</Typography>
                        <Typography variant="body2"
                            color={theme.palette.lightgrey.lightgrey00}
                            className={styles.companyName}
                        >App By Company Name</Typography>
                    </Box>
                </Container>
            </div>

        </Link>
    );
}

export default Splash;