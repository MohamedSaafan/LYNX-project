import { Box, Button, Chip, ClickAwayListener, Fade, IconButton, Link, Tooltip, Typography, capitalize, tooltipClasses } from "@mui/material";
import React from "react";
import theme from "../../../../themes/theme";
import styles from './styles.module.css';
import { Info } from "@mui/icons-material";
import styled from "@emotion/styled";
import CommunityStatus from "./community-status";
import PersonalDetails from "./personal-details";
import Collaborate from "./collaborate";
import ScrollToTopButton from "./scroll-to-top";

const status = [
    'Creator',
    'All Access',
    'Admin',
    'Verified',
];
const collaborats = [
    'Musician',
    'Sign Artist',
    'Architecture',
    'Signer',
    'Dancer',
];
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
    {
        label: 'Age',
        value: 'X',
    },
]


const AboutMe = () => {
    return (
        <Box className={styles.about}>
            <CommunityStatus data={status} />
            <PersonalDetails data={data}/>
            <Collaborate data={collaborats} />
            <ScrollToTopButton />
        </Box>  
    );
}

export default AboutMe;
