import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import { Task, TaskAlt, TaskOutlined } from "@mui/icons-material";


const HWCThanks = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                backgroundColor: theme.palette.lightgrey.lightgrey500,
                minHeight: '100vh',
                width:'100vw',
            }}
        >
            <Box
                sx={{
                    pt: '72px',
                    pb: '72px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            padding: '48px',
                            alignItems: 'flex-start',
                            gap: '8px',
                            borderRadius: '100px',
                            background: 'linear-gradient(160deg, #0F5FF7 9.58%, #9373FF 51.07%, #E81CFF 93.44%)',
                            color: theme.palette.lightgrey.lightgrey00,
                            
                        }}
                    >
                        <TaskOutlined style={{ fontSize: '80px',}} />
                        
                    </Box>
                    <Box
                        sx={{
                            m: '20px auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            alignSelf: 'stretch',
                        }}
                    >
                        <Typography variant="h5" color={theme.palette.darkgrey.darkgrey700}
                            sx={{
                                textAlign: 'center',
                                fontWeight: '700',
                                
                                
                            }}
                        >
                        Thank you for your inquiry.
                        </Typography>
                        <Typography variant="body1"
                            color={theme.palette.darkgrey.darkgrey500}
                            sx={{
                                textAlign:'center'
                            }}
                        >
                        We will get back to you soon.    
                        </Typography>
                    </Box>
                    <Button variant="contained"
                        sx={{
                            p: '10px 24px',
                            textTransform: 'capitalize',
                            
                        }}
                    >
                        Back to Your Card
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default HWCThanks;
