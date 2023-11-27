import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../../../../themes/theme";
import { PostAddRounded } from "@mui/icons-material";
import styles from './style.module.css';
import Given from "./given";
import Received from "./received";


const Text = ({showReceived, showGiven}) => {
    const users = [
        {
          profileImage: '../../../../assets/images/profileImage.png',
          name: 'Robert Fox',
          nickname: 'Kiribati',
          primaryImage: '../../../../assets/images/searchResultImage.png',
          skill: `"Crafting the Future, One Idea at a Time."`,
          desciption: 'Artists may need to communicate their ideas and concepts to clients, collaborators, or the audience effectively.',
          editorChoice: false,
        }, 
        {
          profileImage: '../../../../assets/images/profileImage.png',
          name: 'Robert Fox',
          nickname: 'Kiribati',
          primaryImage: '../../../../assets/images/searchResultImage.png',
          skill: `"Crafting the Future, One Idea at a Time."`,
          desciption: 'Artists may need to communicate their ideas and concepts to clients, collaborators, or the audience effectively.',
          editorChoice: true,
        }, 
        {
          profileImage: '../../../../assets/images/profileImage.png',
          name: 'Robert Fox',
          nickname: 'Kiribati',
          primaryImage: '../../../../assets/images/searchResultImage.png',
          skill: `"Crafting the Future, One Idea at a Time."`,
          desciption: 'Artists may need to communicate their ideas and concepts to clients, collaborators, or the audience effectively.',
          editorChoice: true,
        }, 
        {
          profileImage: '../../../../assets/images/profileImage.png',
          name: 'Robert Fox',
          nickname: 'Kiribati',
          primaryImage: '../../../../assets/images/searchResultImage.png',
          skill: `"Crafting the Future, One Idea at a Time."`,
          desciption: 'Artists may need to communicate their ideas and concepts to clients, collaborators, or the audience effectively.',
          editorChoice: false,
        }, 
      ];
    return (
        <Box className={styles.card}>
            {users.map((user, index) => (
                <Box key={index} className={styles.container}>
                  {showGiven && <Given data={user} />}
                  { showReceived && <Received data={user} />}
                </Box>
            ))}
        </Box>
    );
}

export default Text;