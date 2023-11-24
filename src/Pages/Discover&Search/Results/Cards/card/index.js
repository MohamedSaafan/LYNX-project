import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import theme from '../../../../../themes/theme';
import Top from './top';
import Image from './image';

const Card = ({data}) => {
  return (
    <Box className={styles.card}>
      <Top data={ data } />
      <Image image={ data.primaryImage } />
      <Box className={styles.text}>
        <Typography component="h4" variant='body1'
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            color: theme.palette.darkgrey.darkgrey600,
          }}
        >{data.skill}</Typography>
        <Typography variant='body1'
          sx={{
            fontSize: '16px',
            color: theme.palette.darkgrey.darkgrey500,
          }}
        >
          {data.description}
        </Typography>
      </Box>
      <Box className={styles.button}
        sx={{
          p: '8px 16px 16px',
        }}
      >
        <Button variant='contained'
          sx={{
            textTransform: 'capitalize',
            flex: '1',
          }}
        >
          See Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
