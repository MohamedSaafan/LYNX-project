import React from "react";
import styles from './style.module.css';
import { Box, Chip, Typography} from "@mui/material";
import theme from "../../../../themes/theme";

const SubscriptionCard = () => {
    return (
        <Box className={styles.subCard}>
            <Box className={styles.content}>
                <Chip label="PRO"
                    sx={{
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.lightgrey.lightgrey00,
                        '&.MuiChip-root':{
                            borderRadius: '4px',
                            padding: '13px 10px',
                        },
                        '& .MuiChip-label': {
                            padding: '0px',
                        }
                    }}
                />
                <Box className={styles.text}>
                    <Box className={styles.text}>
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey400,
                                fontWeight: '500',
                            }}
                        >Member since: 04/04/23</Typography>
                        <Typography variant="body1"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: '500',
                            }}
                        >ALL ACCESS PREMIUM</Typography>
                    </Box>
                    <Typography variant="body2"
                        sx={{color: theme.palette.darkgrey.darkgrey400,}}
                    >Expires: 02/28/24</Typography>
                </Box>
            </Box>
        </Box>
    );
}
export default SubscriptionCard;