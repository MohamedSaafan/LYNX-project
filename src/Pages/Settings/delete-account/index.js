import React, { useContext } from "react";
import { SettingsContext } from "../../../context/settings-context";
import { Box, Button, Modal, Typography } from "@mui/material";
import styles from './style.module.css';
import trash from '../../../assets/images/trash-03.svg';
import theme from "../../../themes/theme";

const DeleteConfirmation = () => {
    const{openDeleteConfirmation, setOpenDeleteConfirmation}= useContext(SettingsContext)
    const handleClose = () => {
        setOpenDeleteConfirmation(false);
    }
    return (
        <Modal
        open={openDeleteConfirmation}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box className={styles.delConfirm}
                sx={{
                    width: {
                        xs: '320px',
                        sm: '360px',
                    }
                }}
            >
                <Box className={styles.content}>
                    <Box className={styles.frame}>
                        <Box className={styles.icon}>
                            <img src={trash} alt = "delete" />
                        </Box>
                        <Box className={styles.text}>
                            <Typography variant="body1" component="h4"
                                sx={{
                                    color: theme.palette.darkgrey.darkgrey600,
                                    fontSize: '20px',
                                    fontWeight: '700',
                                }}
                            >
                            Do you want delete your account?
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.buttons}>
                        <Button variant="contained"
                            onClick={handleClose}
                            sx={{
                                textTransform: 'capitalize',
                                color: theme.palette.darkgrey.darkgrey300,
                                fontWeight: '500',
                                bgcolor: theme.palette.lightgrey.lightgrey500,
                                padding: '10px 24px',
                                boxShadow: 'none'
                            }}
                        >
                            Cancel
                        </Button>
                        <Button variant="contained"
                            sx={{
                                textTransform: 'capitalize',
                                color: theme.palette.lightgrey.lightgrey00,
                                fontWeight: '500',
                                bgcolor: theme.palette.danger.red500,
                                padding: '10px 24px',
                                width: '120px',
                            }}
                        >
                            Yes
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Modal>
    );
}
export default DeleteConfirmation