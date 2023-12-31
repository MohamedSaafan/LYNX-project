import React, { useRef, useState } from "react";
import styles from './style.module.css';
import { Avatar, Box, Button, Input, Typography } from "@mui/material";
import theme from "../../../../../themes/theme";
import { AccountCircle, FileUploadOutlined, Person, Person2 } from "@mui/icons-material";


const UploadProfileImage = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageTemp, setSelectedImageTemp] = useState(null);
    const fileInputRef = useRef(null);
    //const [setImage] = props;
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check if the file size is less than or equal to 800 KB (800 * 1024 bytes)
            if (file.size <= 800 * 1024) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    // Update selectedImage with the base64 representation of the selected image
                    setSelectedImageTemp(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Selected image exceeds the maximum size of 800 KB.');
            }
        }
    };

    const handleDeleteImage = () => {
        setSelectedImage(null);
        setSelectedImageTemp(null);
        
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
          
        }
    };

    const handleUploadNow = () => {
        setSelectedImage(selectedImageTemp);
      };

    return (
        <Box className={styles.coverImage}>
            <Box className={styles.container}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '600px',
                    }
                }}
            >
                <Box className={styles.primaryImage}
                    sx={{
                        
                    }}
                >

                    <Box className={styles.primarySkills}
                        sx={{
                            borderColor: theme.palette.lightgrey.lightgrey800,
                            background: theme.palette.lightgrey.lightgrey00,
                            backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            
                        }}
                    >
                    </Box>
                    {!selectedImage && (
                        <React.Fragment>
                            <Box className={styles.content}
                                sx={{
                                    bgcolor: '#F1F0F1',
                                }}
                            >
                                <Person
                                    sx={{
                                        width: '80%',
                                        height: '80%',
                                        color: '#BEBCBE',
                                    }}
                                />    
                            </Box>
                        </React.Fragment>
                    )}
                </Box> 
                {selectedImage && (
                    <Button variant="contained" 
                        onClick={handleDeleteImage}
                        sx={{
                            fontSize: '14px',
                            borderRadius: '25px',
                            background: theme.palette.darkgrey.darkgrey50,
                            border: '1px solid',
                            borderColor: theme.palette.darkgrey.darkgrey50,
                            textTransform: 'capitalize',
                            boxShadow: 'none',
                            color: theme.palette.darkgrey.darkgrey500,
                        }}   
                    >Delete</Button>
                )}
                <Box className={styles.upload}>
                    <Box className={styles.uploadContent}>
                        
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{
                                color: theme.palette.darkgrey.darkgrey400
                            }}
                        />
                        <Typography variant="body2"
                            sx={{
                                color: theme.palette.darkgrey.darkgrey400
                            }}
                        >
                        JPG, GIF or PNG. Max size of 800K
                        </Typography>
                        {!selectedImage && (
                            <Button variant="contained" 
                                onClick={handleUploadNow}
                                sx={{
                                    background: selectedImageTemp? theme.palette.primary.main:theme.palette.primary.purpel50,
                                    textTransform: 'capitalize',
                                    boxShadow: 'none',
                                    color: selectedImageTemp?theme.palette.lightgrey.lightgrey00 : theme.palette.primary.main,
                                    width: '192px',
                                    padding: "8px 16px"
                                }}   
                            >Upload</Button>    
                        )}
                        {selectedImage && (
                            <Button variant="contained" 
                                sx={{
                                    background: selectedImage? theme.palette.primary.main:theme.palette.primary.purpel50,
                                    textTransform: 'capitalize',
                                    boxShadow: 'none',
                                    color: selectedImage?theme.palette.lightgrey.lightgrey00 : theme.palette.primary.main,
                                    width: '192px',
                                    padding: "8px 16px"
                                }}   
                            >Save</Button>    
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default UploadProfileImage;