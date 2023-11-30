import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import styles from './style.module.css';
import theme from '../../../../themes/theme';
import plane from '../../../../assets/images/plane.svg';
import shield from '../../../../assets/images/shield-01.svg';
import certificate from '../../../../assets/images/certificate-01.svg';
import trash from '../../../../assets/images/trash-01.svg';
import logOut from '../../../../assets/images/log-out-04.svg';
import { SettingsContext } from '../../../../context/settings-context';

const Menu = () => {
  const { setOpenSubStatus , setOpenLanding, setOpenPrivacy,setOpenTermsOfService, setOpenDeleteConfirmation} = useContext(SettingsContext);
  const handleSubStatus = () => {
    setOpenSubStatus(true);
    setOpenLanding(false);

  } 
  const handlePrivacy = () => {
    setOpenPrivacy(true);
    setOpenLanding(false);
  } 
  const handleTermsOfService = () => {
    setOpenTermsOfService(true)
    setOpenLanding(false);
  } 
  const handleDeleteAcount = () => {
    setOpenDeleteConfirmation(true);
  } 
  return (
    <Box className={styles.menu}>
      <Box className={styles.content}>
        <Typography variant='body1'
          sx={{color:theme.palette.darkgrey.darkgrey300}}
        >Settings</Typography>
        <Box className={styles.menus}>
          <Button startIcon={<img src={plane} alt="palne" />}
            className={styles.item}
            onClick={handleSubStatus}
            sx={{color: theme.palette.darkgrey.darkgrey500}}
          >Subscription Status</Button>
          <Button startIcon={<img src={shield} alt="shield" />}
            className={styles.item}
            onClick={handlePrivacy}
            sx={{color: theme.palette.darkgrey.darkgrey500}}
          >Privacy Policy</Button>
          <Button startIcon={<img src={certificate} alt="certificate" />}
            className={styles.item}
            onClick={handleTermsOfService}
            sx={{color: theme.palette.darkgrey.darkgrey500}}
          >Terms Of Service</Button>
          <Button startIcon={<img src={trash} alt="trash" />}
            className={styles.item}
            onClick={handleDeleteAcount}
            sx={{color: theme.palette.darkgrey.darkgrey500}}
          >Delete Account</Button>
          <Button startIcon={<img src={logOut} alt="log out" />}
            className={styles.item}
            sx={{color: theme.palette.darkgrey.darkgrey500}}
          >Sign out</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
