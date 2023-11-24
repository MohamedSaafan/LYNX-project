import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import theme from '../../../../../../themes/theme';

const Image = ({image}) => {
  return (
    <Box className={styles.image}>
      <Box className={styles.primaryImg}
          
      >
      </Box>
      <Box className={styles.options}>
          <Chip label="EDITOR'S CHOICE"
              sx={{
                  bgcolor: theme.palette.warning.main,
                  color: theme.palette.lightgrey.lightgrey00,
              }}
          />
          <Chip label="Primary Skill"
              sx={{
                  bgcolor: theme.palette.success.dark,
                  color: theme.palette.lightgrey.lightgrey00,
              }}
          />
      </Box>
    </Box>
  );
};

export default Image;
