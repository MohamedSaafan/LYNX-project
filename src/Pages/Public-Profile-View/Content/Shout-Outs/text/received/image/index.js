import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import theme from '../../../../../../../themes/theme';

const Image = ({image, editorChoice}) => {
  return (
    <Box className={styles.image}>
      <Box className={styles.primaryImg}
          
      >
      </Box>
      <Box className={styles.options}>
        {editorChoice && (
          <Chip className={styles.editorChoice}
            label="Editor's Choice"
            sx={{
              bgcolor: theme.palette.warning.main,
              color: theme.palette.lightgrey.lightgrey00,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Image;
