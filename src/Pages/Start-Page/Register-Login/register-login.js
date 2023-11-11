import { Box, Button, Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography'
import LynxLogo from '../../../assets/images/LYNX-Logo-Low-Res1.png';
import styles from './register-login.module.css';
import theme from '../../../themes/theme';
import { Add, DragHandle, Google } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import bgImg from '../../../assets/images/carousele-img1.png'
import { Link } from 'react-router-dom';

const items = [
    {
      bgImg: bgImg,
    },
    {
      bgImg: bgImg,
    },
    {
      bgImg: bgImg,
    },
  ];

const Login = () => {
    return (
        <Box className={styles.gredient}>
            <Box className={styles.register}>
                <img src={LynxLogo} className={styles.logo} alt="Logo" width="100" height="100" />
                <Container>
                    <Carousel className={styles.carousel} >
                    {items.map((item, index) => (
                      <Paper key={index} className={styles.carouselItem}>
                        <img src={item.bgImg}
                          style={{ margin: 0, padding: 0, boxSizing:'border-box', }}
                          width='100%'
                          height='100%'
                          
                        />  
                      </Paper>
                    ))}
                    </Carousel>
                </Container>
                <Button 
                    fullWidth
                    sx={{
                        backgroundColor: theme.palette.tertiary.golden500,
                      color: theme.palette.lightgrey.lightgrey00,
                        textTransform:'capitalize',
                    }}
                    className={styles.button}
                    startIcon={<Google/>}>
                    Sign in with Google</Button>
            </Box>
        </Box>
    );
}

export default Login;