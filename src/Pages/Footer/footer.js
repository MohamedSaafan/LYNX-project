import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FindInPageOutlined, LayersOutlined, PortraitOutlined, Settings } from '@mui/icons-material';
import theme from '../../themes/theme';

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{width: '100%',}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
              
        sx={{
            background: theme.palette.lightgrey.lightgrey00,    
        }}      
      >
        <BottomNavigationAction label="My Card" icon={<PortraitOutlined />} />
        <BottomNavigationAction label="Discover" icon={<FindInPageOutlined />} />
        <BottomNavigationAction label="Projects" icon={<LayersOutlined />} />
        <BottomNavigationAction label="Settings" icon={<Settings />} />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;