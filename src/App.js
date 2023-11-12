import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Splash from './Pages/Start-Page/Splash/splash';
import Login from './Pages/Start-Page/Register-Login/register-login';
import theme from './themes/theme';
import CreatorRegistration from './Pages/Registration-Flow/creator-registration';
import Thanks from './Pages/Registration-Flow/RegisterationThanks/thanks';
import Footer from './Pages/Footer/footer';
import MyProfile from './Pages/My-Profile-View/My-Profile/MyProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CreatorRegistration />}>
      <Route path='thanks' element = {Thanks } />
    </Route>
  )
)


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='login' element = {<Login /> } />
        <Route path="creator-register" element={<CreatorRegistration />}></Route>
        <Route path='thanks' element={<Thanks />} ></Route>
        <Route path='my-profile' element={<MyProfile />}>
          
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
