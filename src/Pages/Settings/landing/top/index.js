import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import theme from '../../../../themes/theme';
import image from '../../../../assets/images/profileImage.png';

const Top = () => {
  return (
    <Box className={styles.top}>
      <Box className={styles.profile}>
        <Box className={styles.image}
          sx={{
            backgroundImage: `url(${image})`,
            width: '48px',
            height: '48px',
            backgroundSize: 'cover',  
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
    
          }}
        >
        </Box>
        <Box className={styles.name}>
          <Typography variant="h6"
              sx={{
                color: theme.palette.darkgrey.darkgrey600,
                fontSize: '18px',
              }}
          >Robert Fox</Typography>
          <Typography variant="body2"
            sx={{
              color:theme.palette.darkgrey.darkgrey300,
            }}
          >Brazil</Typography>
        </Box>
      </Box>
      <Box className={styles.Shouts}>
        <Button
          variant='contained'
          sx={{
            textTransform: 'capitalize',
            borderRadius: '25px',
          }}
        >
          View My Card
        </Button>
      </Box>
    </Box>
  );
};

export default Top;
