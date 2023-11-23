import React, { useRef, useState } from "react";
import styles from './style.module.css';
import { Box, Button, Link } from "@mui/material";
import theme from "../../../../../../themes/theme";
import profilPicture from '../../../../../../assets/images/PrimaryImage.png';

const UpdateProfilePicture = (props) => {
    const [selectedImage, setSelectedImage] = useState(profilPicture);
    
    const handleDeleteImage = () => {
        setSelectedImage(null);
    };

    const deleteStyle= {
        fontSize: '14px',
        borderRadius: '25px',
        background: theme.palette.darkgrey.darkgrey50,
        border: '1px solid',
        borderColor: theme.palette.darkgrey.darkgrey50,
        textTransform: 'capitalize',
        boxShadow: 'none',
        padding: '6px 16px',
        color: theme.palette.darkgrey.darkgrey500,
    }
    const uploadStyle = {
        background: theme.palette.primary.main,
        textTransform: 'capitalize',
        boxShadow: 'none',
        color: theme.palette.lightgrey.lightgrey00,
        width: '192px',
        padding: "10px 24px",
        fontWeight: '500',
        fontSize: '15px'
    }

    return (
        <Box className={styles.coverImage}>
            <Box className={styles.container}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '240px',
                    }
                }}
            >
                <Box className={styles.primaryImage}>
                    <Box className={styles.primarySkills}
                        sx={{
                            backgroundImage: selectedImage ?
                                `url(${selectedImage})` : 'none',    
                        }}
                    >
                    </Box> 
                </Box>
                <Box className={styles.uploadContent}>
                    <Link href="/my-profile" underline="none">
                        <Button variant="text" 
                            onClick={handleDeleteImage}
                            sx={deleteStyle}   
                        >Delete</Button>
                    </Link>
                    <Link href="/UPImage" underline="none">
                        <Button variant="contained" 
                            sx={uploadStyle}   
                        >Upload New Picture</Button>        
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default UpdateProfilePicture;