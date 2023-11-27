import React from "react";
import { Box, Typography} from "@mui/material";
import styles from './style.module.css';
import theme from "../../../themes/theme";
import ProfileTabs from "./tabs";
import rockAndRoll from '../../../assets/images/rock-and-roll.png';

const Header = ({data, profilImage}) => {
    return (
        <React.Fragment>
            <Box className={styles.myCardDetails}>
                <Box className={styles.userDetails}>
                    <Box className={styles.details}>
                        <Box className={styles.image}
                            sx={{
                                backgroundImage: `url(${profilImage})`,
                                backgroundSize: 'cover',  
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                            }}
                        > 
                        </Box>
                        <Box className={styles.name}>
                            <Typography variant="body1" component="h6"
                                sx={{
                                    color: theme.palette.lightgrey.lightgrey00,
                                    fontSize: {
                                        xs: '16px',
                                        sm: '20px',
                                    }
                                }}
                            >Cody Fisher’s Card</Typography>
                            <Typography variant="body1"
                                sx={{
                                    color:theme.palette.tertiary.golden500,
                                }}
                            >McKey</Typography>
                        </Box>
                    </Box>
                    <Box className={styles.shouts}
                        sx={{bgcolor: theme.palette.warning.main}}
                    >
                        <img src={rockAndRoll} width='100%' height= '100%' alt="rock-and-roll" />
                    </Box>
                </Box>
                <ProfileTabs data={data}/>
            </Box>
        </React.Fragment>
    );
}

export default Header;