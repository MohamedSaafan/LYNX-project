import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './card';
import styles from './style.module.css';
import { Box } from '@mui/material';
import i from '../../../../assets/images/searchResultImage.png'
const data = [
  {
    profileImage: '../../../../assets/images/profileImage.png',
    name: 'Robert Fox',
    nickname: 'Kiribati',
    primaryImage: '../../../../assets/images/searchResultImage.png',
    skill: `“High Voltage Rock 'n' Roll”`,
    desciption: 'Artists may need to communicate their ideas and concepts to clients, collaborators, or the audience effectively.',

  }, 
  {
    profileImage: '../../../../assets/images/profileImage.png',
    name: 'Robert Fox',
    nickname: 'Kiribati',
    primaryImage: '../../../../assets/images/searchResultImage.png',
    skill: `“High Voltage Rock 'n' Roll”`,
    desciption: 'Artists may need to communicate their ideas and concepts to clients, collaborators, or the audience effectively.',

  }, 
  {
    profileImage: '../../../../assets/images/profileImage.png',
    name: 'Robert Fox',
    nickname: 'Kiribati',
    primaryImage: '../../../../assets/images/searchResultImage.png',
    skill: `“High Voltage Rock 'n' Roll”`,
    desciption: 'Artists may need to communicate their ideas and concepts to clients, collaborators, or the audience effectively.',

  }, 
];


const ResponsiveCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <Box className={styles.cards}
      sx={{
        '& .react-multi-carousel-list': {
          overflow: 'initial',
        },
        '& ul.react-multi-carousel-track': {
          gap: '16px'
        }
      }}
    >
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        
        {data.map((user, index)=>(
          <Box >
            <Card data={user} />

          </Box>  
        ))}
      
      </Carousel>
    </Box>
  );
};

export default ResponsiveCarousel;
