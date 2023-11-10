import { Box, Button, Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography'
import LynxLogo from '../../../assets/images/LYNX-Logo-Low-Res1.png';
import styles from './register-login.module.css';
import theme from '../../../themes/theme';
import { Add, Google } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';

const items = [
    {
      name: 'Item 1',
      description: 'Description for Item 1',
    },
    {
      name: 'Item 2',
      description: 'Description for Item 2',
    },
    {
      name: 'Item 3',
      description: 'Description for Item 3',
    },
  ];

const Login = () => {
    return (
        <Box className={styles.gredient}>
            <Box className={styles.register}>
                <img src={LynxLogo} className={styles.logo} alt="Logo" width="100" height="100" />
                <Container>
                    <Carousel className={styles.carousel}>
                    {items.map((item, index) => (
                        <Paper key={index} className={styles.carouselItem}>
                        </Paper>
                    ))}
                    </Carousel>
                </Container>
                <Button
                    fullWidth
                    sx={{
                        backgroundColor: theme.palette.tertiary.golden500,
                        color: theme.palette.lightgrey.lightgrey00,
                    }}
                    className={styles.button}
                    startIcon={<Google/>}>
                    Sign in with Google</Button>
            </Box>
        </Box>
    );
}

export default Login;