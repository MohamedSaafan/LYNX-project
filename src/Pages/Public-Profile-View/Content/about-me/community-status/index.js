import { Box, Chip,Typography } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import styles from './styles.module.css';

const CommunityStatus = ({data}) => { 

    return (
        <Box className={styles.community}
            sx={{ bgcolor: theme.palette.lightgrey.lightgrey00, width:'100%', }}
        >
            <Typography variant="body1"
                className={styles.heading}
                sx={{color: theme.palette.darkgrey.darkgrey600,}}
            >
                Community Status
            </Typography>
            <Box className={styles.tags}>
                {data.map((state, index) => (
                    <Chip key={index} label={state} sx={{
                        fontWeight: '500',
                        fontSize: '14px',
                        p: '2px 5px',
                        bgcolor: state == 'Admin' ?
                            theme.palette.primary.main : state == 'Verified'?
                                theme.palette.success.dark : 'intial',
                        color: state == 'Admin' || state == 'Verified'?
                            theme.palette.lightgrey.lightgrey00 : theme.palette.darkgrey.darkgrey500, 
                    }} />    
                ))}
            </Box>
        </Box>  
    );
}

export default CommunityStatus;
