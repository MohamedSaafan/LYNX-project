import { Box, Button, Container, Grid, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography'
import LynxLogo from '../../../assets/images/LYNX-Logo-Low-Res1.png';
import styles from './register-login.module.css';
import theme from '../../../themes/theme';
import { Add, DragHandle, Google } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import bgImg from '../../../assets/images/carousele-img1.png';
import bgImg2 from '../../../assets/images/PrimaryImage.png';
import { Link } from 'react-router-dom';

const items = [
    {
      bgImg: bgImg,
    },
    {
      bgImg: bgImg2,
    },
    {
      bgImg: bgImg,
    },
  ];

const Login = () => {
    return (
        <Box className={styles.gredient}>
          <Stack className={styles.register}
            spacing={{md:6, xs:1}}
          >
            <img src={LynxLogo} className={styles.logo} alt="Logo" width="100" height="100" />
            <Container>
            <Carousel className={styles.carousel}>
              {items.map((item, index) => (
                <Grid key={item.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                  }}
                >
              
                  <Paper key={index} className={styles.carouselItem}
                    sx={{
                      width: {
                        xs:360,
                      },
                      height: {
                        xs: 420,
                        sm: 480,
                        md:380,
                      },
                    }}
                  >
                    <img src={item.bgImg}
                      style={{
                        margin: 0, padding: 0, boxSizing: 'border-box',
                        width:'100%',
                        height:'100%'
                      }}
                    />  
                  </Paper>
                </Grid>
              ))}
            </Carousel>
          </Container>
          <Button 
            fullWidth
            sx={{
              backgroundColor: theme.palette.tertiary.golden500,
              color: theme.palette.lightgrey.lightgrey00,
              textTransform: 'capitalize',
              width: {
                xs: '100%',
                sm:'50%',
              }
            }}
            className={styles.button}
            startIcon={<Google/>}>
            Sign in with Google</Button>
        </Stack>
      </Box>
    );
}

export default Login;