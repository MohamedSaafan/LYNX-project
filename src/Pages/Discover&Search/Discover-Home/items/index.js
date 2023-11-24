import { Box, Typography } from "@mui/material";
import React from "react";
import styles from './style.module.css';
import theme from "../../../../themes/theme";
import fashion from '../../../../assets/images/fashion.png';
import music from '../../../../assets/images/music.png';
import digitalArts from '../../../../assets/images/digital-arts.png';
import Architectures from '../../../../assets/images/Architectures.png';
import Designer from '../../../../assets/images/Designer.png';
import UXdesigner from '../../../../assets/images/UX designer.png';

const Items = () => {
    const data = [
        {
            image: fashion,
            name: 'Fashion',
        },
        {
            image: music,
            name: 'Music',
        },
        {
            image: digitalArts,
            name: 'Digital Arts',
        },
        {
            image: Architectures,
            name: 'Architectures',
        },
        {
            image: Designer,
            name: 'Designer',
        },
        {
            image: UXdesigner,
            name: 'UX designer',
        },
    ]

    return (
        <Box className={styles.items}>
            {data.map((item, index) => (
                <Box key={index} className={styles.CreatorCard}>
                    <Box className={styles.img}>
                        <img src={item.image} width="100%" height="100%" alert="lynx"/>
                    </Box>    
                    <Box className={styles.text}>
                        <Typography variant="body1"
                            sx={{
                                color: theme.palette.primary.main
                            }}
                        >{item.name}</Typography>
                    </Box>    
                </Box>        
            ))}
        </Box>
    );
}

export default Items;