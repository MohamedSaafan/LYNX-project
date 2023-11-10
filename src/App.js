import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Splash from './Pages/Start-Page/Splash/splash';
import Login from './Pages/Start-Page/Register-Login/register-login';
import theme from './themes/theme';
import CreatorRegistration from './Pages/Registration-Flow/creator-registration';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CreatorRegistration />}>
      <Route path='login' element = {<Splash />} />
    </Route>
  )
)


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
