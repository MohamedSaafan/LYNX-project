import React from "react";
import styles from "./style.module.css";
import { Box, Typography } from "@mui/material";
import theme from "../../../../../../../themes/theme";
import { Check, Info, PieChart, PieChartOutline, PieChartOutlined } from "@mui/icons-material";


const Alert = ({skill}) => {
    
    return (
        <React.Fragment>
            {(() => {
                if (skill.active === true && skill.created === true) {
                    return (
                        <Box className={styles.alert}
                            sx={{
                                border: '1px solid',
                                borderColor: theme.palette.lightgrey.lightgrey600,
                                background: theme.palette.success.dark,
                            }}
                        >
                            <Check fontSize="16px" sx={{ color: theme.palette.lightgrey.lightgrey00 }} />
                        </Box>
                    );
                }
                else if (skill.active === false && skill.created === true) { 
                    return (
                        <Box className={styles.alert}
                            sx={{
                                border: '1px solid',
                                borderColor: theme.palette.lightgrey.lightgrey600,
                                background: theme.palette.danger.red500,
                            }}  
                        >
                            <Info fontSize="16px" sx={{ color: theme.palette.danger.red500, background: '#fff', borderRadius:'100px' }} />
                        </Box>
                    );
                }
                else if (skill.active === false && skill.created === false) { 
                    return (
                        <Box className={styles.alert}
                            sx={{
                                border: '1px solid',
                                borderColor: theme.palette.lightgrey.lightgrey600,
                                background: theme.palette.warning.main,
                            }}  
                        >
                            <PieChartOutlined fontSize="16px" sx={{ color: theme.palette.lightgrey.lightgrey00 }} />
                        </Box>
                    );
                }

                /*switch (skill) {
                    case 1:
                        return (
                            <Box className={styles.alert}
                                sx={{
                                    border: '1px solid',
                                    borderColor: theme.palette.lightgrey.lightgrey600,
                                    background: theme.palette.success.dark,
                                }}  
                            >
                                <Check fontSize="16px" sx={{ color: theme.palette.lightgrey.lightgrey00 }} />
                            </Box>
                        );  
                    case 2:
                        return (
                            <Box className={styles.alert}
                                sx={{
                                    border: '1px solid',
                                    borderColor: theme.palette.lightgrey.lightgrey600,
                                    background: theme.palette.danger.red500,
                                }}  
                            >
                                <Info fontSize="16px" sx={{ color: theme.palette.danger.red500, background: '#fff', borderRadius:'100px' }} />
                            </Box>
                        );  
                    case 3:
                        return (
                            <Box className={styles.alert}
                                sx={{
                                    border: '1px solid',
                                    borderColor: theme.palette.lightgrey.lightgrey600,
                                    background: theme.palette.warning.main,
                                }}  
                            >
                                <PieChartOutlined fontSize="16px" sx={{ color: theme.palette.lightgrey.lightgrey00 }} />
                            </Box>
                        );  
                    // Add other cases as needed
                    default:
                    return null; // Default case, return null or another fallback value
                }*/
            })()}   
        
        </React.Fragment>
    );
}

export default Alert;