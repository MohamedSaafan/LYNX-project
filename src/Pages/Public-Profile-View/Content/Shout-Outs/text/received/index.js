import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import theme from '../../../../../../themes/theme';
import Top from './top';
import Image from './image';

const Received = ({data}) => {
  return (
    <Box className={styles.card}>
      <Top data={ data } />
      <Image image={ data.primaryImage } editorChoice={data.editorChoice} />
      <Box className={styles.text}>
        <Typography component="h4" variant='body1'
          sx={{
            fontSize: '12px',
            fontWeight: '500',
            color: theme.palette.darkgrey.darkgrey600,
          }}
        >{data.skill}</Typography>
      </Box>
      <Box className={styles.button}>
        <Button variant='contained'
          sx={{
            fontSize: '12px',
            textTransform: 'capitalize',
            p: '2px 8px',
            fontWeight: '400',
          }}
        >
          See Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Received;
