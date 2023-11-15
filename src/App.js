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
import AboutEdit from './Pages/My-Profile-View/About-Edit/aboutEdit';
import EditSkill from './Pages/My-Profile-View/My-Skills/components/status/editSkill';
import EditDescription from './Pages/My-Profile-View/My-Skills/components/skill-about/editDescription';
import MakeLynxBetter from './Pages/My-Profile-View/MakeLYNXBetter';



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
        <Route path='about-edit' element={<AboutEdit />} />
        <Route path='editSkill' element={<EditSkill/>} />
        <Route path='editDescription' element={<EditDescription/>} />
        <Route path='makeLynxBetter' element={<MakeLynxBetter/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
