import { Box, Button, IconButton, Tooltip, Typography, capitalize } from "@mui/material";
import React from "react";
import theme from "../../../themes/theme";
import styles from './aboutMe.module.css';
import { Info } from "@mui/icons-material";

const data = [
    {
        label: 'My Real Name',
        value: 'Marvin McKinney',
    },
    {
        label: 'My Nickname',
        value: 'McKey',
    },
    {
        label: 'Country',
        value: 'United States',
    },
    {
        label: 'Tagline',
        value: `“🤘The World's Greatest Rock "'n' Roll Band”`,
    },
    {
        label: 'Profile Link',
        value: 'https://lynx-app.com/johnnythedoe',
    },
    {
        label: 'Public Email Address',
        value: 'vuhaithuongnute@gmail.com',
    },
    {
        label: 'Postal Code',
        value: '90036',
    },
    {
        label: 'City / State / Region',
        value: '90036 - Los Angeles, CA',
    },
    {
        label: 'Mobile Number',
        value: '(207) 555-0119',
    },
    {
        label: 'Birth Year',
        value: '10/28/92',
    },
    {
        label: 'Pronouns',
        value: 'He/Him',
    },
]


const AboutMe = () => {
    const buttonstyle = {
        borderRadius: '25px',
        border: '1px solid',
        borderColor: theme.palette.lightgrey.lightgrey500,
        background: theme.palette.lightgrey.lightgrey500,
        textTransform: 'capitalize',
        padding: '6px 16px',
        color: theme.palette.darkgrey.darkgrey500,
    }
    return (
        <Box
            sx={{
                display: 'flex',
                padding: '16px 24px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '16px',
                alignSelf: 'stretch',
                
            }}
        >
            <Box className={styles.community}
                sx={{ bgcolor: theme.palette.lightgrey.lightgrey00, width:'100%', }}
            >
                <Typography variant="body1"
                    sx={{
                        color: theme.palette.darkgrey.darkgrey600,

                    }}
                >
                    Community Status
                </Typography>
                <Box className={styles.tags}>
                    <Button
                        sx={buttonstyle}
                    >Creator</Button>
                    <Button
                        sx={{
                            borderRadius: '25px',
                            background: theme.palette.warning.light,
                            textTransform: 'capitalize',
                            padding: '6px 16px',
                            color: theme.palette.warning.dark,
                        
                        }}
                    >Incomplete</Button>
                    <Tooltip
                        title="hello"
                    >
                        <IconButton aria-label="info"
                            sx={{
                                border: '1px solid ',
                                borderColor: theme.palette.darkgrey.darkgrey500,
                                bgcolor: theme.palette.darkgrey.darkgrey100,
                                display: 'flex',
                                width: '20px',
                                height: '20px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="body2"
                                color={theme.palette.darkgrey.darkgrey500}
                                fontWeight='500'
                            >i</Typography>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Box className={styles.communityStatus}
                sx={{
                    bgcolor: theme.palette.lightgrey.lightgrey00,
                }}
            >
                <Typography variant="body1"
                    sx={{
                        color:theme.palette.darkgrey.darkgrey600,
                    }}
                >
                    Personal Details
                </Typography>
                
                <Box className={styles.content}>
                    
                    {data.map((item, index) => (
                        <Box key={item.label} className={styles.same}>
                            <Typography variant="body2"
                                sx={{
                                    color:theme.palette.darkgrey.darkgrey300
                                }}
                            >
                                {item.label}
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    color:theme.palette.darkgrey.darkgrey600
                                }}
                            >
                                {item.value}
                            </Typography>
                        </Box>
                        
                    ))}
                </Box>

            </Box>
            <Box className={styles.communityStatus}
                sx={{
                    bgcolor: theme.palette.lightgrey.lightgrey00,
                }}
            >
                <Box className={styles.content}>
                    <Typography variant="body"
                        sx={{
                            color:theme.palette.darkgrey.darkgrey600,        
                        }}
                    >I am looking to collaborate with:</Typography>
                    <Box className={styles.tags}
                        sx={{
                            flexWrap: 'wrap',
                        }}
                    >
                        <Button
                            sx={buttonstyle}
                        >Creator</Button>
                        <Button
                            sx={buttonstyle}
                        >Creator</Button>
                        <Button
                            sx={buttonstyle}
                        >Creator</Button>
                        <Button
                            sx={buttonstyle}
                        >Creator</Button>
                        <Button
                            sx={buttonstyle}
                        >Creator</Button>
                    </Box>
                </Box>
                <Box className={styles.content}>
                    <Typography variant="body"
                        sx={{
                            color:theme.palette.darkgrey.darkgrey600,        
                        }}
                    >Age Range</Typography>
                    <Box className={styles.tags}
                        sx={{
                            flexWrap: 'wrap',
                        }}
                    >
                        <Button
                            sx={buttonstyle}
                        >X</Button>
                        <Button
                            sx={buttonstyle}
                        >Y</Button>
                        <Button
                            sx={buttonstyle}
                        >Z</Button>
                        <Button
                            sx={buttonstyle}
                        >X+</Button>
                        <Button
                            sx={buttonstyle}
                        >Y+</Button>
                    </Box>
                </Box>
                
            </Box>

        </Box>  
    );
}

export default AboutMe;
