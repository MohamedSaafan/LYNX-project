import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../../themes/theme";
import { PostAddRounded } from "@mui/icons-material";

const Text = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                padding: '60px 0px 100px 0px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
                flex: '1 0 0',
                alignSelf: 'stretch',
            }}              
        >
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    alignSelf: 'stretch',
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
                    <PostAddRounded style={{ fontSize: '88px',}} />
                    
                </Box>
                <Typography variant="h5" color={theme.palette.darkgrey.darkgrey700}
                    sx={{
                        textAlign: 'center',
                        fontWeight: '700',
                        
                        
                    }}
                >
                Complete your profile to be eligible to receive shout outs ☺
                </Typography>
            </Box>
            <Button variant="contained"
                sx={{
                    p: '10px 24px',
                    textTransform: 'capitalize',
                    
                }}
            >
                Complete Profile
            </Button>
        </Box>
    );
}

export default Text;