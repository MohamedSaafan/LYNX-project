import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Splash from './Pages/Start-Page/Splash/splash';
import theme from './themes/theme';
import { Login } from '@mui/icons-material';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Splash />}>
      <Route path='login' element = {<Login />} />
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
