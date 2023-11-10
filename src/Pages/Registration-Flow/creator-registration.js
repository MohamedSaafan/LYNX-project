import React, { useState } from 'react';
import Step1 from './Step1/step1';
import { Box, Container, Paper, Typography } from '@mui/material';
import theme from '../../themes/theme';
import LynxLogo from '../../assets/images/LYNX-Logo-Low-Res2.png';
import styles from './creator-registration.module.css';
import { LogoDev } from '@mui/icons-material';
import HorizontalLinearStepper from './Stepper/stepper';

const CreatorRegistration = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <Box
        sx={{backgroundColor: theme.palette.lightgrey.lightgrey500}}
      >
          <Container className={styles.basicLogo}>
              <Container className={styles.content}>
                <img src={LynxLogo} className={styles.logo} alt="Logo" />
                  <Box className={styles.text}>
                    <Typography variant="h4" align="center" gutterBottom color={theme.palette.darkgrey.darkgrey700}>
                    Creator Registration
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom color={theme.palette.darkgrey.darkgrey500}>
                    Apply in less than 60 seconds
                    </Typography>      
                </Box>
              </Container>    
        </Container>

        <Container className={styles.stepper}>
            <HorizontalLinearStepper />
        </Container>  
    
    </Box>
  );
};

export default CreatorRegistration;
