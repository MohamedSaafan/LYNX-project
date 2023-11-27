import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import theme from "../../../../../themes/theme";
import styles from './styles.module.css';

const ScrollToTopButton = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollFunction = () => {
        if (window.pageYOffset > 20) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);

        return () => {
        window.removeEventListener('scroll', scrollFunction);
        };
    }, []);
    return (
            <Button variant="contained"
                onClick={scrollToTop}
                className={styles.up}
                sx={{
                    bgcolor: theme.palette.primary.light,
                    display: isVisible ? 'flex' : 'none',
                    
                }}
            >Hit me Up</Button>
    );
}

export default ScrollToTopButton;
