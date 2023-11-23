import React from "react";
import { Box, Button, Container, Link, Tab, Tabs, Typography} from "@mui/material";
import styles from './style.module.css';
import theme from "../../../../themes/theme";

const ProfileName = () => {
    return (
        <Box className={styles.name}>
            <Typography variant="h6"
                sx={{
                    color:theme.palette.lightgrey.lightgrey00,
                }}
            >Cody Fisher’s Card</Typography>
            <Button variant="outlined"
                sx={{
                    borderRadius: '25px',
                    textTransform: 'initial',
                    p: '6px 16px',
                    color: theme.palette.darkgrey.darkgrey500,
                    borderColor: theme.palette.lightgrey.lightgrey00,
                    backgroundColor: theme.palette.lightgrey.lightgrey00,
                    
                }}
            >
                <Link href="/makeLynxBetter" underline="none" color="inherit" > Make LYNX Better </Link> 
            
            </Button>
        </Box>  
    );
}

export default ProfileName;