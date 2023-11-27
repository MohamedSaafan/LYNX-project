import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import theme from '../../../../../../../themes/theme';
import image from '../../../../../../../assets/images/profileImage.png';
import rockAndRoll from '../../../../../../../assets/images/rock-and-roll.png';

const Top = ({data}) => {
  return (
    <Box className={styles.top}>
      <Box className={styles.profile}>
        <Box className={styles.image}
          sx={{
            backgroundImage: `url(${image})`,
            width: '32px',
            height: '32px',
            backgroundSize: 'cover',  
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
    
          }}
        >
        </Box>
        <Box className={styles.name}>
          <Typography variant="h6"
              sx={{
                color:theme.palette.darkgrey.darkgrey600,
              }}
          >{data.name}</Typography>
          <Typography variant="body2"
            sx={{
              color:theme.palette.darkgrey.darkgrey300,
            }}
          >{data.nickname}</Typography>
        </Box>
      </Box>
      <Box className={styles.Shouts}
        sx={{
          bgcolor:theme.palette.warning.main,
        }}
      >
        <img src={rockAndRoll} width='100%' height= '100%' alt="rock-and-roll" />
      </Box>
    </Box>
  );
};

export default Top;
