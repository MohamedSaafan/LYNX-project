import React from "react";
import { Box, Button, Container, Link, Tab, Tabs, Typography} from "@mui/material";
import styles from './style.module.css';
import { AddPhotoAlternateOutlined, Edit, EditOutlined } from "@mui/icons-material";
import theme from "../../../../themes/theme";


const ProfileImage = ({profilImage}) => {
    return (
        <React.Fragment>
            {profilImage === '' && (
                <Link href="/UPImage" underline="none">
                    <Box className={styles.image}>
                        <AddPhotoAlternateOutlined
                            sx={{
                                width: '40px',
                                height: '40px',
                                flexShrink: '0',
                                color:theme.palette.darkgrey.darkgrey400,
                            }}
                        />
                    </Box>
                </Link>    
            )}
            {profilImage !== '' && (
                <Link href="/UProfilePicture" underline="none">
                    <Box className={styles.image}
                        sx={{
                            backgroundImage: `url(${profilImage})`,
                            backgroundSize: 'cover',  
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                        }}
                    >
                        <Box className={styles.Cameraupload}>
                            <EditOutlined fontSize="16px" sx={{color:theme.palette.darkgrey.darkgrey400}} /> 
                        </Box>
                    </Box>
                </Link>
            )}
        </React.Fragment>
    );
}

export default ProfileImage;