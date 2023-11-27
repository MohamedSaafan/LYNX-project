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
import MakeLynxBetter from './Pages/My-Profile-View/Feedback/makeLynxBetter';
import MLBThanks from './Pages/My-Profile-View/Feedback/makeLynxBetter/MLBThanks/index';
import HelpWithClassification from './Pages/My-Profile-View/Feedback/helpWithClassificaton';
import HWCThanks from './Pages/My-Profile-View/Feedback/helpWithClassificaton/HWCThanks';
import UploadCoverImage from './Pages/My-Profile-View/My-Skills/components/skill-cover-image.js/upload-cover-image';
import AddSkill from './Pages/My-Profile-View/My-Skills/components/add-skill';
import UploadProfileImage from './Pages/My-Profile-View/My-Profile/profile-image/upload-profile-image';
import UpdateProfilePicture from './Pages/My-Profile-View/My-Profile/profile-image/upload-profile-image/update-picture';
import DiscoverHome from './Pages/Discover&Search/Discover-Home';
import CreatorSearch from './Pages/Discover&Search/Search';
import SearchResult from './Pages/Discover&Search/Results';
import SearchContextProvider from './context/searchContext';
import PublicProfileView from './Pages/Public-Profile-View';
import SkillsBarContextProvider from './context/skills-bar-context';
import SkillsContextProvider from './context/skills-context';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchContextProvider>
        <SkillsBarContextProvider>
          <SkillsContextProvider>
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
              <Route path='makeLynxBetter' element={<MakeLynxBetter />} />
              <Route path='MLBThanks' element={<MLBThanks />} />
              <Route path='HWCThanks' element={<HWCThanks />} />
              <Route path='helpWithClassificatin' element={<HelpWithClassification/>} />
              <Route path='UCImage' element={<UploadCoverImage />} />
              <Route path='UPImage' element={<UploadProfileImage />} />
              <Route path='addSkill' element={<AddSkill />} />
              <Route path='UProfilePicture' element={<UpdateProfilePicture />} />
              <Route path='discover-home' element={<DiscoverHome />} />
              <Route path='search' element={<CreatorSearch />} />
              <Route path='searchResult' element={<SearchResult />} />
              <Route path='public-profile-view' element={<PublicProfileView />} />
              
              </Routes>
          </SkillsContextProvider>
          </SkillsBarContextProvider>
        </SearchContextProvider>
    </ThemeProvider>
  );
}

export default App;
